function getProcessorInfo() {
  let userAgent = navigator.userAgent;
  let platform = navigator.platform;
  let hardwareConcurrency = navigator.hardwareConcurrency;
  let gpu = navigator.gpu;

  return `User Agent: ${userAgent}<br>
                Platform: ${platform}<br>
                Logical Processors: ${hardwareConcurrency}<br>
                GPU: ${gpu}`;
}

document.getElementById("show-info-btn").addEventListener("click", function () {
  document.getElementById("processor-info").innerHTML = getProcessorInfo();
});
