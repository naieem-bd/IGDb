const croppedImgUrl = (url: string | null) => {
  if (!url) {
    return 'https://placehold.co/600x400';
  }

  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default croppedImgUrl;
