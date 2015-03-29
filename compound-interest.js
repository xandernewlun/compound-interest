var ci;

window.onload = (function(){
	var private = {
		rate: document.getElementById("rate").value / 100,
		base_amount: document.getElementById("base_amount").value,
		years: document.getElementById("years").value,
		comp_per_year: document.getElementById("comp_per_year").value,
	};

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