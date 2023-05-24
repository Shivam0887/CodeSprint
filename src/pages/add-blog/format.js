export const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    [{ align: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "+1" },
      { indent: "-1" },
      { script: "sub" },
      { script: "super" },
    ],
    [{ color: [] }, { background: [] }, { font: [] }],
    ["link", "code-block"],
  ],
  syntax: true,
};

export const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "font",
  "strike",
  "align",
  "blockquote",
  "color",
  "background",
  "list",
  "ordered",
  "bullet",
  "indent",
  "link",
  "script",
  "code-block",
];
