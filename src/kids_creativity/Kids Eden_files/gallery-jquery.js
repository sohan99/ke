$(document).ready(function(){
	window.onload = function() {
//code example written by Olivia Hoback
//www.olivia.nu

		//this function can be used to check if an element exist
		jQuery.fn.exists = function(){return this.length>0;}






			var imgUrlFullsize = "";
			var count = 1;
			var imageWidth = Number();
			var allImagesWidth = Number();
			var difference = Number();
			var numberOfImages = Number();
			var imgElement;
			var currentRow;
			var allImagesWidthWithPadding = Number();

		function createGallery(){

					//first we put all the image holders in a variable, then we remove them from the html
					var container = $('.container');
					var elements = container.children('.img-holder');
					$('.img-holder').remove();

					//we start by adding a new row with id row-1
					$( ".container" ).append('<div id="row-' + count + '" class="row"></div>');


						//for each value in elements (for each .img-holder), we add the -img-holder with contents to the row
						jQuery.each(elements, function(){

								$( "#row-" + count).append(this);

								//we put the width of the img-holder in a variable
								imageWidth = $(this).width();

								//and keep on adding on the width with each image
								allImagesWidth = Number(allImagesWidth) + Number(imageWidth);
								//we also keep track of the image width + the padding, keep on adding untill < 800px
								allImagesWidthWithPadding = Number(allImagesWidthWithPadding) + Number(imageWidth) + 10;


								//when we reach over 800px in total width of the images + padding, we need to adjust the width to fit perfectly in the row
								//800 is the width of the container set in the css-file
								 if(allImagesWidthWithPadding > 800){

										//we calculate the overlapping difference
										difference = allImagesWidthWithPadding - 800 - 10; //minus an extra 10px since the last img will nott have any padding-right
										numberOfImages = $( "#row-" + count).find('img').length; //number of images in current row

										//all images exept the last one is getting a margin-right 10px
										var numberOfImagesWithPadding = Number(numberOfImages - 1); //number of images with padding
										var totalRightPadding = Number(numberOfImagesWithPadding * 10); //total padding in this row


										//this is how much each image must be adjusted to fit in %
										var procentCalc = difference / allImagesWidth;

										currentRow = $("#row-" + count);
										imgElement = currentRow.children('.img-holder');

										$(imgElement).last().addClass('last'); //put the class .last on the last .img-holder
										$(imgElement).first().addClass('first'); //put the class .first on the first .img-holder



					if(!(difference == 0)){ //If the difference is NOT 0, meaning that images + padding is too wide.
							//We adjust the width to line up the images perfectly in width
											jQuery.each(imgElement, function(){

												var currentImgHolderWidth = Number();
												currentImgHolderWidth = $(this).width();

												//We calculate the new with of the img-holder in %
												var newWidth = Number(currentImgHolderWidth * procentCalc);
												newWidth = currentImgHolderWidth - newWidth;

												newWidth = parseInt(newWidth); //we make the value an integer, no decimal
												//set the new with on the current .img-holder
												$(this).css( "width", newWidth );

											});



										var ImageWidthWithPadding = Number();
										var AllImagesWidthWidthpadding = Number();

										//we find out how much width all images in one row have in total, put the padding on except for the .last
										jQuery.each(imgElement, function(){
											if (!$(this).hasClass("last")) {
												ImageWidthWithPadding = $(this).width();
												AllImagesWidthWidthpadding = AllImagesWidthWidthpadding + ImageWidthWithPadding + 10;

											}else{ //then we adjust the last image to fit perfectly to make an even row
												var adjustDifferens = 800 - AllImagesWidthWidthpadding;
												$(this).css( "width", adjustDifferens );
											}
										});
					} // end of if the difference was NOT 0px

										//reset the variables keeping track of the image with for each row
										allImagesWidth = 0;
										allImagesWidthWithPadding = 0;
										count++;
										$( ".container" ).append('<div id="row-' + count + '" class="row"></div>');
								}
								else{

									//if the images doesn't take up the whole row, we still put the class .first on the first img-holder
									currentRow = $("#row-" + count);
									imgElement = currentRow.children('.img-holder');
									$(imgElement).first().addClass('first');
								}

						});


		//When all images are aligned and loaded we fade in the gallery
						showGallery();

		}




		function showGallery(){
			$('.container').animate({
			opacity: 1
			}, 1000, function() {
			});
		}

		createGallery();









	var scrollTopLocation;
	var CurrentRowID;
	var CurrentFullSizeImgUrl;
	var CurrentTitle;

	var previousTarget = null;


	//Toggle gallery images----------------------------------------------------------------------------------------------------------------------------

			$( ".img-holder" ).click(function() {



				CurrentRow = $(this).parent().attr("id");
				CurrentRowID = '#' + CurrentRow;
				CurrentFullSizeImgUrl = $(this).attr('data-url');
				CurrentTitle = $(this).find('img').attr('alt');





				if ($('.gallery-holder').exists()){ //if a gallery-holder already exist
					if( $('.gallery-holder').attr('id') == ('gallery-holder-' + CurrentRow) ){ //if we click within the same row
						if(this == previousTarget){ //If we click an image twice in a row
								//we remove the gallery view
								$('.gallery-holder').slideToggle('slow', function() {
								$('.gallery-holder').remove();
								});
							previousTarget = null;

						}else{
								if ($('.gallery-holder').exists()){ //if a gallery view in the same row is alreday open we just switch images

									$('.gallery-holder .img-wrapper img').remove();
									$('.gallery-holder .img-title h1').remove();
									$('.gallery-holder .img-wrapper').append('<img src="' + CurrentFullSizeImgUrl + '" />');
									$('.gallery-holder .img-title').append('<h1>' + CurrentTitle + '</h1>');
									previousTarget = null;
									previousTarget=this;
									return false;
								}else{
									//If there is no gallery view open at all, create one
									$(CurrentRowID).find('.first').before( '<div id="gallery-holder-' + CurrentRow + '" class="gallery-holder"></div>' );
									$('.gallery-holder').append('<div class="img-wrapper"><img src="' + CurrentFullSizeImgUrl + '" /></div>');
									$('.gallery-holder').append('<div class="img-title"><h1>' + CurrentTitle + '</h1></div>');
									$('.gallery-holder').slideToggle("slow");

									//we scroll the gallery view to the top of the page
									scrollTopLocation =('#gallery-holder-' + CurrentRow);
									$('html,body').animate({
										scrollTop: $(scrollTopLocation).offset().top},
										'slow');

									previousTarget = null;
									previousTarget=this;
									return false;
								}



						}



					}else{ //if a gallery view allready exist, but in another row, we remove the open one, and create a new one for the current row

						$('.gallery-holder').slideToggle("slow");
						$('.gallery-holder').remove();

						$(CurrentRowID).find('.first').before( '<div id="gallery-holder-' + CurrentRow + '" class="gallery-holder"></div>' );
						$('.gallery-holder').append('<div class="img-wrapper"><img src="' + CurrentFullSizeImgUrl + '" /></div>');
						$('.gallery-holder').append('<div class="img-title"><h1>' + CurrentTitle + '</h1></div>');
						$('.gallery-holder').slideToggle("slow");

						//we scroll the gallery view to the top of the page
						scrollTopLocation =('#gallery-holder-' + CurrentRow);
						$('html,body').animate({
							scrollTop: $(scrollTopLocation).offset().top},
							'slow');

						previousTarget = null;
						previousTarget=this;
						return false;


					}

				}

				else{ //if no gallery view exist and we didn't click any images before this, we create a new gallery view
				$(CurrentRowID).find('.first').before( '<div id="gallery-holder-' + CurrentRow + '" class="gallery-holder"></div>' );
				$('.gallery-holder').append('<div class="img-wrapper"><img src="' + CurrentFullSizeImgUrl + '" /></div>');
				$('.gallery-holder').append('<div class="img-title"><h1>' + CurrentTitle + '</h1></div>');
				$('.gallery-holder').slideToggle("slow");


				scrollTopLocation =('#gallery-holder-' + CurrentRow);
				$('html,body').animate({
					scrollTop: $(scrollTopLocation).offset().top},
					'slow');

				previousTarget = null;
				previousTarget=this;
				return false;

				}


			});


	}
	});
