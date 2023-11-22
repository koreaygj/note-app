import React, { useState } from "react";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import { useAppSelector } from "../../hooks/redux";
import NewNoteModal from "../../components/Modal/NewNoteModal/NewNoteModal";

function ArchiveNotes() {
  const { archiveNotes } = useAppSelector((state) => state.notesList);
  const [visible, setVisible] = useState(false);
  const handleOpenModal = () => {
    setVisible(true);
    console.log(visible);
  };
  const handleCloseModal = () => {
    setVisible(false);
  };
  return (
    <div>
      <h1>archive</h1>
      <button onClick={handleOpenModal}>새로운 노트</button>
      <NewNoteModal isOpen={visible} onClose={handleCloseModal} />
      {archiveNotes.length === 0 ? (
        <div>노트가 없습니다.</div>
      ) : (
        <MainWrapper notes={archiveNotes} type="archive" />
      )}
    </div>
  );
}

export default ArchiveNotes;
