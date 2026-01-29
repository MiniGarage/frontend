/**
 * Get car image path with proper fallback
 * @param {string} modelName - Car model name
 * @returns {string} Image path
 */
export function getCarImagePath(modelName) {
  if (!modelName) {
    return "/assets/car/placeholder.png";
  }

  // Encode spaces and special characters in URL
  const encodedName = encodeURIComponent(modelName);
  return `/assets/car/${encodedName}.png`;
}

/**
 * Handle image load error with fallback
 * @param {Event} e - Image error event
 */
export function handleImageError(e) {
  if (e.target.src.includes("placeholder")) {
    return;
  }
  e.target.src = "/assets/car/placeholder.png";
}
