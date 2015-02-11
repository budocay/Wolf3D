function	parse_aff(content, conf)
{
    conf.map = parse(content);
    color_img(conf.img);
    calc_aff_wall(conf.map, conf);
}

function        move_map(keycode, conf)
{
    if (keycode == 37 || keycode == 81)
    {
        conf.a += 0.3;
	if ((conf.a | 0) == 6.28)
	    conf.a = 0;
    }
    if (keycode == 38 || keycode == 90)
    {
        conf.x0 += Math.cos(conf.a) * 0.5;
	conf.y0 += Math.sin(conf.a) * 0.5;
	if (conf.map[conf.y0 | 0][conf.x0 | 0] == '1')
	{
	    conf.x0 -= Math.cos(conf.a) * 0.5;
	    conf.y0 -= Math.sin(conf.a) * 0.5;
	}
    }
    move_map2(keycode, conf);
}

function	move_map2(keycode, conf)
{
    if (keycode == 39 || keycode == 68)
    {
        conf.a -= 0.3;
	if ((conf.a | 0) == -6)
	    conf.a = 0;
    }
    if (keycode == 40 || keycode == 83)
    {
        conf.x0 -= Math.cos(conf.a) * 0.5;
	conf.y0 -= Math.sin(conf.a) * 0.5;
	if (conf.map[conf.y0 | 0][conf.x0 | 0] == '1')
	{
	    conf.x0 += Math.cos(conf.a) * 0.5;
	    conf.y0 += Math.sin(conf.a) * 0.5;
	}
    }
    color_img(conf.img);
    calc_aff_wall(conf.map, conf);
    if (keycode == 27)
	mlj_clear_window(conf.win);
    return(conf);
}
