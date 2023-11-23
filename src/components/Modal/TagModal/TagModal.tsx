import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { toggleTagsModal } from "../../../store/modal/modalSlice";
import { addTags } from "../../../store/tags/tagsSlice";
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

  const handleAddTag = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTags({ name: input, id: Date.now() }));
    setInput("");
  };
  return (
    <div className={styles.modalOverlay}>
      {type === "add" ? (
        <div onSubmit={handleAddTag}>
          <div className={styles.tagList}>
            {tags.map((tag, index) => (
              <div key={index} className={styles.tagItem}>
                {tag.name}
                <div
                  className={
                    !isToggled
                      ? [styles.plusMinusToggle, styles.active].join(" ")
                      : styles.plusMinusToggle
                  }
                  onClick={() => setIsToggled((prev) => !prev)}
                ></div>
              </div>
            ))}
          </div>
          <button className={styles.tagAddBtn}>Add</button>
        </div>
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
          <form onSubmit={handleAddTag}>
            <input
              className={styles.tagInput}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="new tag..."
            />
            <div className={styles.tagList}>
              {tags.map((tag, index) => (
                <div key={index} className={styles.tagItem}>
                  {tag.name}
                  <div
                    className={
                      !isToggled
                        ? [styles.plusMinusToggle, styles.active].join(" ")
                        : styles.plusMinusToggle
                    }
                    onClick={() => setIsToggled((prev) => !prev)}
                  ></div>
                </div>
              ))}
            </div>
            <button className={styles.tagAddBtn}>Add</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TagModal;
