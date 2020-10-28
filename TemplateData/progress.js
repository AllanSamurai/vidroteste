var downloadSize = 4;
var useDownloadSize = false;
function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module)
    return;
  if (!gameInstance.loadScreen) {
    gameInstance.loadScreen = document.getElementById('loadScreen');
  }

  if (!gameInstance.progress) {
    gameInstance.progress = document.getElementById("progress");
    gameInstance.progress.empty = document.getElementById("empty");
    gameInstance.progress.full = document.getElementById("full");
    gameInstance.progress.downloadInfo = document.getElementById('downloadInfo');
    gameInstance.info = document.getElementById('info');
    gameInstance.waitInit = document.getElementById('waitInit');
  }
  gameInstance.progress.full.style.width = (100 * progress / .9) + "%";
  gameInstance.progress.empty.style.width = (100 * (1 - progress / .9)) + "%";
  if (useDownloadSize)
    gameInstance.progress.downloadInfo.innerHTML = (progress / .9 * downloadSize).toFixed(3) + "/" + downloadSize + "mb";
  else {
    gameInstance.progress.downloadInfo.innerHTML = Math.round( (progress / .9)*100) + "%";
  }
  if (progress >= .9) {
    gameInstance.waitInit.style.display = "inherit";
    // gameInstance.progress.style.display = "none";
    gameInstance.info.style.display = "none";
    gameInstance.progress.downloadInfo.innerHTML = "inicializando";
  }

  if (progress == 1)
    gameInstance.loadScreen.style.display = gameInstance.progress.style.display = "none";
}