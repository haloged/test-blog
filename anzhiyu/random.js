var posts=["posts/d9c0a3d4.html","posts/6c03698e.html","posts/7.7457e+65.html","posts/72a7a47.html","posts/6161a01b.html","posts/6bc7efd8.html","posts/46dfedfb.html","posts/d2fbe29f.html","posts/4a17b156.html","posts/c8ea5f0f.html","posts/3d96aee9.html","posts/eb3c7af5.html","posts/49609453.html","posts/cde05bbf.html","posts/36af3259.html","posts/f190a193.html","posts/a72cf7a1.html","posts/e655e845.html","posts/3fe50ae2.html","posts/51d32d85.html","posts/f35e1f9c.html","posts/3b321daf.html","posts/33d44a23.html","posts/d8f7872c.html","posts/78e8aec1.html","posts/a7c745ca.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};