import { galleryItems } from './gallery-items.js';
// Change code below this line
{/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */}
const imageGallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(({preview, original,description}) => 
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`)
.join(``);

imageGallery.insertAdjacentHTML("beforeend", markup);

function imageHandler(evt){
    evt.preventDefault();
    if (evt.target.nodeName!=="IMG")return;
    const imageSrc=evt.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${imageSrc}" width="800" height="600"/>
    `,
    {
      onClose: (instance) =>{
        document.removeEventListener(`keydown`,modalCloseByEsc);
      },
      onShow: (instance)=>{
        document.addEventListener(`keydown`,modalCloseByEsc);
      }
    });
    instance.show();
    function modalCloseByEsc(evt){
      if(evt.code!=="Escape"){
        return;
      }
      instance.close();
    }  
}
imageGallery.addEventListener("click",imageHandler);
