import React, { useState } from "react";

export default function CreatePost({ onPostSubmit }) {
  const [text, setText] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAttachment(file);

    // Show preview if it's an image
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = () => {
    if (text.trim() || attachment) {
      onPostSubmit({ text, attachment });
      setText("");
      setAttachment(null);
      setPreview(null);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4">
      {/* Text Input */}
      <textarea
        className="w-full border rounded-lg p-2 focus:outline-none focus:ring"
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      {/* Attachment */}
      <div className="mt-2 flex items-center gap-4">
        <label className="cursor-pointer bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200">
          📎 Attach File
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {attachment && (
          <span className="text-sm text-gray-600 truncate max-w-xs">
            {attachment.name}
          </span>
        )}
      </div>

      {/* Image Preview */}
      {preview && (
        <div className="mt-3">
          <img
            src={preview}
            alt="Preview"
            className="max-h-40 rounded-lg border"
          />
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Post
      </button>
    </div>
  );
}
