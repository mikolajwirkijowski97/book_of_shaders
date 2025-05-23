#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


float plot(vec2 st, float pct){
  return  smoothstep( pct-0.03, pct, st.y) -
          smoothstep( pct, pct+0.03, st.y);
}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;

    float y = (sin(st.x*20.) + 1.) / 2.0;

    vec3 color = vec3(y);

    // Plot a line
    float pct = plot(st,y);
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

	gl_FragColor = vec4(color,1.0);
}
