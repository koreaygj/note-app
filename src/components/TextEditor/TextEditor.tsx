import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles
import { Container } from "./Text.Editor.styles";
import styles from "./TextEditor.module.css";
interface TextEditorProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  color: string;
}

const formats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "list",

  "color",
  "background",

  "image",
  "blockquote",
  "code-block",
];

const modules = {
  toolbar: [
    [{ list: "ordered" }, { list: "bullet" }],
    [],
    ["italic", "underline", "strike"],
    [],
    [{ color: [] }, { background: [] }],
    [],
    ["image", "blockquote", "code-block"],
  ],
};

const TextEditor: React.FC<TextEditorProps> = ({
  color,
  value,
  setValue,
}: TextEditorProps) => {
  return (
    <Container noteColor={color}>
      <ReactQuill
        theme="snow" // 테마 설정
        formats={formats}
        modules={modules}
        value={value} // 에디터의 내용
        onChange={setValue} // 내용이 변경될 때 실행될 함수
        placeholder="노트 내용" // placeholder 텍스트
      />
    </Container>
  );
};

export default TextEditor;
