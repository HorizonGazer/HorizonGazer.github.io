(function(window) {
  var aliases = {
    '/2023/10/10/738aa39b/': '/2023/10/10/使用GATK4获取SNP/',
    '/2023/10/20/0770b8e4/': '/2023/10/20/使用MAKER进行基因组注释/',
    '/2024/02/15/50c36298/': '/2024/02/15/DUT人工智能与专家系统_HW1/',
    '/2024/05/20/db1e2241/': '/2024/05/20/一篇基于R语言的scRNA-seq文章复现/',
    '/2026/01/23/a689da4a/': '/2026/01/23/FE/',
    '/9999/09/09/4ceaf5fc/': '/9999/09/09/献给挚爱的小狗/'
  };

  window.FluidValinePath = function() {
    var path = window.location.pathname.replace(/\/index\.html$/, '/');
    try {
      path = decodeURI(path);
    } catch (error) {
      // Keep the raw path if the browser returns malformed encoding.
    }
    return aliases[path] || path;
  };
})(window);
