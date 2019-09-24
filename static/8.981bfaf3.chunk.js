webpackJsonp([8],{1942:function(t,e,n){var a=n(0),l=n(90),o=n(427).PageRenderer;o.__esModule&&(o=o.default);var s=l({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(2045)}},componentWillMount:function(){},render:function(){return a.createElement(o,Object.assign({},this.props,{content:this.state.content}))}});s.__catalog_loader__=!0,t.exports=s},2045:function(t,e){t.exports="## Slider\n\n```react\nshowSource: true\nstate: {}\n---\n<div style={{background: \"#fff\", padding: 20}}>\n\t<Slider value={1} stopCount={5} />\n\t<Slider value={1} stopCount={5} />\n</div>\n```\n\n### With minValue / maxValue\n\n```react\nshowSource: true\nstate: {}\n---\n<div style={{background: \"#fff\", padding: 20}}>\n\t<Slider value={2} minValue={0} maxValue={2} stopCount={5} />\n\t<Slider value={3} minValue={1} maxValue={3} stopCount={5} />\n\t<Slider value={4} minValue={2} maxValue={4} stopCount={5} />\n</div>\n```\n\n### With labels\n\n```react\nshowSource: true\nstate: {}\n---\n<div style={{background: \"#fff\", padding: 20}}>\n\t<Slider value={1} stopCount={5} labels={['Admins', 'Moderators', 'Members', 'Followers', 'Public']} />\n\t<Slider value={1} stopCount={5} labels={['One', 'Two', 'Three', 'Four', 'Five']}/>\n\t<Slider value={1} minValue={1} maxValue={3} stopCount={5} labels={['', 'Min', '', 'Max', '']}/>\n</div>\n```\n\n### Callback props: onStop vs onSlide\n\nIf your slider will be making external API calls, you may wish to call that only on the `onStop` callback, when the user has finished sliding.\nIf you want to have incremental updates while the slider is moving, such as to keep multiple sliders in sync, you may want to use the `onSlide` callback prop.\n\n```react\nshowSource: true\nstate: { value: 1 }\n---\n<div style={{background: \"#fff\", padding: 20}}>\n\tonStop:\n\t<Slider\n\t\tvalue={state.value}\n\t\tstopCount={5}\n\t\tonStop={function (value) {setState({value: value})}}\n\t/>\n\tonSlide:\n\t<Slider\n\t\tvalue={state.value}\n\t\tstopCount={5}\n\t\tonSlide={function (value) {setState({value: value})}}\n\t/>\n</div>\n```\n\n### hideAvailableStops\n\nFor sliders with many stops, consider using the `hideAvailableStops` option.\nThis component has performances issues with many stops. Consider using no more than 51 stops for percentile sliders.\n\n```react\nshowSource: true\nstate: { value: 50, labels: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100] }\n---\n<div style={{background: \"#fff\", padding: 20}}>\n\t<div>Opacity: {state.value * 2}</div>\n\t<Slider\n\t\tvalue={state.value}\n\t\tonStop={function (value) {setState({value: value})}}\n\t\tstopCount={51}\n\t\tlabels={state.labels}\n\t/>\n\t<Slider\n\t\thideAvailableStops\n\t\tvalue={state.value}\n\t\tonStop={function (value) {setState({value: value})}}\n\t\tstopCount={51}\n\t\tlabels={state.labels}\n\t/>\n\t<img src=\"https://www.bellinghamherald.com/news/local/l6de4z/picture53186905/alternates/LANDSCAPE_1140/Faithlife%201\" alt=\"Faithlife campus\" style={{ maxWidth: '100%', opacity: (state.value * 2) / 100 }} />\n</div>\n```\n\n### Note on background colors\n\nThe slider component expects a white background to create the sections of inactive track that cover the blue gradient.\nIf your slider is not on a white background, use the `styleOverrides` prop to indicate the background color.\n\n```react\nshowSource: true\nstate: {}\n---\n<div style={{background: \"#8fdb6b\", padding: 20}}>\n\t<Slider value={1} maxValue={3} stopCount={5} />\n\t<Slider styleOverrides={{ backgroundColor: '#8fdb6b' }} value={1} maxValue={3} stopCount={5} />\n</div>\n```\n"}});
//# sourceMappingURL=8.981bfaf3.chunk.js.map