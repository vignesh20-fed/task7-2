const users1 = [
				  {
					first_name: 'Mike',
					last_name: 'Sheridan',
					age: 30
				  },
				  {
					first_name: 'Tim',
					last_name: 'Lee',
					age: 45
				  },
				  {
					first_name: 'John',
					last_name: 'Carte',
					age: 25
				  }
				];
			let lastname=users1.map (function (user){
			return user.last_name;
			});
			console.log(lastname);
			document.write("<br>",lastname);