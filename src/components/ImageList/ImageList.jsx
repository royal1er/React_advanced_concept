import { ImageListItem } from "../ImageListItem/ImageListItem";
import "./ImageList.css";
export function ImageList({ imageList }) {
  return (
    <div>
      {imageList.map((img) => {
        return (
          <div key={img.id} className="card_item">
            <ImageListItem img={img} />
          </div>
        );
      })}
    </div>
  );
}
