// getGPUName.js
function getGPUName() {
    var canvas = document.createElement("canvas");
    var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (dbgRenderInfo != null) {
        var renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
        document.getElementById('gpuName').innerHTML = `GPU Name: ${renderer}`;
        return renderer;
    } else {
        document.getElementById('gpuName').innerHTML = 'WEBGL_debug_renderer_info extension not supported';
        return null;
    }
}

// Call the function when the page loads
window.onload = getGPUName;