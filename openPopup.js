function openPopup() {
  // YouTube video URL
  const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  
  // Popup window dimensions
  const width = 560;
  const height = 315;
  
  // Calculate the position of the popup window to center it on the screen
  const left = (window.innerWidth / 2) - (width / 2);
  const top = (window.innerHeight / 2) - (height / 2);
  
  // Open the popup window
  window.open(videoUrl, '', `width=${width},height=${height},left=${left},top=${top}`);
}
