export const Movies = () => {
  return (
    <>
      <Searchbar onSubmit={handleSubmit}></Searchbar>;{isLoading && <Loader />}
      {images && !isLoading && (
        <ImageGallery images={images} selectImage={selectImage} />
      )}
      {error && <div>{error}</div>}
      {images.length !== 0 && !isLoading && <Button onClick={loadMore} />}
    </>
  );
};
