function openMovie(movieId) {
    // store selected movie
    localStorage.setItem("movieId", movieId);
    window.location.href = "movie-details.html";
}
