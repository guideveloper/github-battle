/**
* This is an example request. Create your own using best practises for
* handling asynchronous data fetching
**/

export const getData = (cb) => {
    const player = new XMLHttpRequest();
    player.open('GET', 'https://jsonplaceholder.typicode.com/users');

    player.onreadystatechange = function() {
        if(player.readyState === 4) {
 		    if(player.status === 200) {
 			    cb(player.responseText);
		    }
		}
	};

	player.send();
};
