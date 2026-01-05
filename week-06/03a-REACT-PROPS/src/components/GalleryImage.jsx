//we know props = {src="", alt=""} b/c we wrote it
//we can put this in comment for others to know, or we can code it in by destructuring props

function GalleryImage({ src, alt }) {
  return (
    <div className="image-wrap">
      <img src={src} alt={alt} />
      <figcaption>{alt}</figcaption>
    </div>
  );
}

export default GalleryImage;
