aws s3 rm s3://flickr.sumarap.com --recursive
aws s3 cp . s3://flickr.sumarap.com --recursive --exclude "*.*" --include "*.html" --include "*.js" --include "*.css" --include "*.svg" --include "*.png"
