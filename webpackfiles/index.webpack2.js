function click(){
  alert('click33');
  require.ensure(['./require.ensure.test'], function(){
    // require('./require.ensure.test');
    console.log('require successfully');
  }, 'require.ensure.test');

  require.ensure(['./css/index1.css'], function(){
    console.log('require index1 successfully');
  });
}

module.exports = {
  click
}