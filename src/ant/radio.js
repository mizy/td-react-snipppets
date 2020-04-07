<Radio.Group
	value={this.state.value}
	onChange={(e) => {
		const value = e.target.value;
	}}
>
	<Radio value={1}>A</Radio>
	<Radio value={2}>B</Radio>
	<Radio value={3}>C</Radio>
	<Radio value={4}>D</Radio>
</Radio.Group>;

<Radio.Group
	defaultValue="a"
	buttonStyle="solid"
>
	<Radio.Button value="a">Hangzhou</Radio.Button>
	<Radio.Button value="b">Shanghai</Radio.Button>
	<Radio.Button value="c">Beijing</Radio.Button>
	<Radio.Button value="d">Chengdu</Radio.Button>
</Radio.Group>;
