import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const emojis = [
  { icon: "😡", label: "Very Bad" },
  { icon: "😕", label: "Bad" },
  { icon: "😐", label: "Okay" },
  { icon: "😊", label: "Good" },
  { icon: "😍", label: "Excellent" },
];

const Review = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = () => {
    if (!selectedEmoji || rating === 0 || reviewText.trim() === '') {
      Swal.fire("Incomplete", "Please fill in all review details.", "warning");
      return;
    }

    // Replace this with your API call or DB logic
    Swal.fire({
      title: "Thanks for your review!",
      html: `
        <p><strong>Rating:</strong> ${rating} Star(s)</p>
        <p><strong>Feeling:</strong> ${selectedEmoji.label}</p>
        <p><strong>Comment:</strong><br />${reviewText}</p>
      `,
      icon: "success",
      confirmButtonColor: "#4F46E5",
    });

    // Reset form
    setSelectedEmoji(null);
    setRating(0);
    setReviewText('');
  };

  return (
    <>
    <Helmet><title>movieverse | Experience</title></Helmet>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-10">
      <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg border text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Share Your Experience</h2>

        {/* Emoji Selector */}
        <div className="flex justify-center gap-4 mb-6">
          {emojis.map((emoji, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedEmoji(emoji)}
              className={`text-3xl transition-transform ${
                selectedEmoji?.icon === emoji.icon ? 'scale-125' : 'hover:scale-110'
              }`}
              title={emoji.label}
            >
              {emoji.icon}
            </button>
          ))}
        </div>

        {/* Star Rating */}
        <div className="rating rating-lg flex justify-center mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <input
              key={star}
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              aria-label={`${star} star`}
              checked={rating === star}
              onChange={() => setRating(star)}
            />
          ))}
        </div>

        {/* Review Input */}
        <textarea
          className="w-full p-3 mb-6 border-2 text-black border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Write your review here..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>

        {/* Submit Button */}
        <Link to='/'
          onClick={handleSubmit}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Submit Review
        </Link>
      </div>
    </div>
    </>
  );
};

export default Review;
