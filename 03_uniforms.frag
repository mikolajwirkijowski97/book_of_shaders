#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;  // Canvas size (width,height)
uniform vec2 u_mouse;       // mouse position in screen pixels
uniform float u_time;       // Time in seconds since load


void main() {
    vec2 mouse_pos = u_mouse/u_resolution; // Normalized mouse position
	vec2 st = (gl_FragCoord.xy*mouse_pos)/u_resolution;
	gl_FragColor = vec4(st.x,st.y,0.0,1.0);
}
