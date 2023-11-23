import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { toggleTagsModal } from "../../../store/modal/modalSlice";
import { addTags, removeTags } from "../../../store/tags/tagsSlice";
import { Tag } from "../../../types/tags";
import styles from "./TagModal.module.css";

interface TagModalProps {
  type: string;
  updatedTags?: Tag[];
  handleUpdateTag?: (tag: string, type: string) => void;
}

function TagModal({ type, updatedTags, handleUpdateTag }: TagModalProps) {
  const { tags } = useAppSelector((state) => state.tags);

  const [input, setInput] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  const dispatch = useAppDispatch();

  const handleAddTag = () => {
    dispatch(addTags({ name: input, id: Date.now() }));
  };
  console.log(tags);
  return (
    <div className={styles.modalOverlay}>
      {type === "add" ? (
        "null"
      ) : (
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h3>{type === "add" ? "ADD" : "EDIT"}</h3>
            <button
              className={styles.tagModalClose}
              onClick={() =>
                dispatch(toggleTagsModal({ type: type, view: false }))
              }
            >
              &times;
            </button>
          </div>
          {type === "add" ? (
            ""
          ) : (
            <input
              className="new-tag-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="new tag..."
              onKeyDown={(e) => e.key === "Enter"}
            />
          )}
          <div className={styles.tagList}>
            {tags.map((tag, index) => (
              <div key={index} className={styles.tagItem}>
                {tag.name}
                <button
                  className={isToggled ? styles.addBtn : styles.deleteBtn}
                  onClick={() => setIsToggled((prev) => !prev)}
                ></button>
              </div>
            ))}
          </div>
          <button className={styles.tagAddBtn} onClick={handleAddTag}>
            Add
          </button>
        </div>
      )}
    </div>
  );
}

export default TagModal;
