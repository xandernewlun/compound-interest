var ci;

window.onload = (function(){
	var private = {
		rate: parseFloat(document.getElementById("rate").value) / 100,
		base_amount: parseFloat(document.getElementById("base_amount").value),
		years: parseFloat(document.getElementById("years").value),
		comp_per_year: parseFloat(document.getElementById("comp_per_year").value),
	};

	console.log(private.rate, private.base_amount, private.years, private.comp_per_year);

	public = {
		solve: function(){
			var P = private.base_amount,
				n = private.comp_per_year,
				r = private.rate,
				t = private.years;
			return P * Math.pow((1 + r / n), n * t);
		},
		updateSolution: function(){
			var solution = public.solve();
			solution = solution.toFixed(2);
			document.getElementById("solution").innerHTML = solution;
			document.getElementById("message").innerHTML = "This is your Interest + Inital Investment:";
		}
	};

	ci = public;
});