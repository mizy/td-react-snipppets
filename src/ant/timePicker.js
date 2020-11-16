<TimePicker
    onChange={(time, timeString) => {
        console.log(time, timeString);
    }}
    defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
/>
