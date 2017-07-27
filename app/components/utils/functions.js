export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getUrls() {
  const Urls = ["http://listen.vo.llnwd.net/g3/0/2/2/3/5/1317253220.mp3", "http://listen.vo.llnwd.net/g3/4/1/9/1/5/1302051914.mp3", "http://listen.vo.llnwd.net/g3/1/9/5/4/8/1332884591.mp3", "http://listen.vo.llnwd.net/g3/8/9/9/2/5/1328952998.mp3", "http://listen.vo.llnwd.net/g3/9/6/4/0/9/1332690469.mp3","http://listen.vo.llnwd.net/g3/9/6/4/0/9/1332690469.mp3","http://listen.vo.llnwd.net/g3/3/0/1/9/9/1344599103.mp3","http://listen.vo.llnwd.net/g3/2/3/0/6/2/1332326032.mp3", "http://listen.vo.llnwd.net/g3/6/4/4/4/6/1340864446.mp3", "http://listen.vo.llnwd.net/g3/3/6/7/0/0/1326600763.mp3","http://listen.vo.llnwd.net/g3/7/0/0/5/6/1320765007.mp3"];

  return `${rando(Urls)}`;
}

// export function getTitles(){
// 	const titles = []

// }