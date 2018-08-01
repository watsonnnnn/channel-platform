function click(){
  alert('click33');
  require.ensure(['./require.ensure.test'], function(){
    require('./require.ensure.test');
    console.log('require successfully');
  }, 'require.ensure.test');
}

module.exports = {
  click
}