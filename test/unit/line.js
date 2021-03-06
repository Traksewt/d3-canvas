describe('Area', function() {
	var area;

	beforeEach(function() {
		area = d3.canvas.area();
	});

	it('should support regular accessors', function() {
		var keys = [
			'x',
			'y',
			'strokeStyle',
			'lineWidth',
			'lineCap',
			'lineJoin',
			'miterLimit'
		], _ = 'hi';

		keys.forEach(function(key) {
			area[key](_);
			area[key]().should.equal(_);
		});
	});
});
