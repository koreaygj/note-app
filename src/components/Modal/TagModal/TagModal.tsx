import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { toggleTagsModal } from "../../../store/modal/modalSlice";
import { addTags, removeTags } from "../../../store/tags/tagsSlice";
import { Tag } from "../../../types/tags";
import styles from "./TagModal.module.css";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";

interface TagModalProps {
  type: string;
  updatedTags?: Tag[];
  handleUpdateTag?: (tag: string, type: string) => void;
}

function TagModal({ type, updatedTags, handleUpdateTag }: TagModalProps) {
  const { tags } = useAppSelector((state) => state.tags);

  const [input, setInput] = useState("");

  const dispatch = useAppDispatch();

  const handleAddTag = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTags({ name: input, id: Date.now() }));
    setInput("");
  };

  console.log(type);
  return (
    <div className={styles.modalOverlay}>
      {type === "add" ? (
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h3>{`${type.toUpperCase()} the Tag`}</h3>
            <button
              className={styles.tagModalClose}
              onClick={() =>
                dispatch(toggleTagsModal({ type: type, view: false }))
              }
            >
              &times;
            </button>
          </div>
          <div>
            <div className={styles.tagList}>
              {tags.map((tag, index) => (
                <div key={index} className={styles.tagItem}>
                  {tag.name}
                  {updatedTags?.find(
                    (updatedTag: Tag) => updatedTag.name === tag.name
                  ) ? (
                    <FaMinus
                      onClick={() => handleUpdateTag!(tag.name, "remove")}
                    />
                  ) : (
                    <FaPlus onClick={() => handleUpdateTag!(tag.name, "add")} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h3>{`${type.toUpperCase()} the Tag`}</h3>
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
                  <FaTimes
                    onClick={() => dispatch(removeTags({ id: tag.id }))}
                  />
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
