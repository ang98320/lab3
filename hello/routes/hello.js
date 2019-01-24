
/*
 * GET home page.
 */

exports.view = function(req, res){
	/*if (userName != null) {
		res.render('index', {
			'name': userName,
		});
	}*/
	//else {
  res.render('index', {
  	'name': 'World',
  });
	//}
};

/*
exports.get('hello/:userName', function(request, response, next) {
	var username = request.params.userName;
	res.render('index', {
		'name': userName,
	});
});*/