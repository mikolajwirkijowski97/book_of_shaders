#ifdef GL_ES
precision mediump float;
#endif
uniform float u_time;

void main() {
    float r = sin(u_time*5.);
    gl_FragColor = vec4(r,0.0,1.0,1.0);
}