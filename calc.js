
function        calc_aff_wall(map, conf, move_map)
{
    var		x;
    var		k;

    if (map == null)
	return;
    x = 0;
    while (x <= 800)
    {
	calc_suite(x, conf);
	k = calc_k(map, conf.x0, conf.y0, conf);
	conf.img = wall(k, x, conf.img);
	x++;
    }
    mlj_put_image_to_window(conf.win, conf.img, 0, 0);
}

function	calc_suite(x, conf)
{
    conf.y1 = (((conf.P * ((conf.img.width / 2) - x)) / conf.img.width));
    conf.xprim = (conf.x1 * Math.cos(conf.a)) - (conf.y1 * Math.sin(conf.a));
    conf.yprim = (conf.x1 * Math.sin(conf.a)) + (conf.y1 * Math.cos(conf.a));
    conf.xprimp = conf.xprim + conf.x0;
    conf.yprimp = conf.yprim + conf.y0;
    conf.Vx = (conf.xprimp - conf.x0);
    conf.Vy = (conf.yprimp - conf.y0);
}

function        calc_k(map, x, y, conf)
{
    var		k;
    var		x1;
    var		y1;

    k = 0;
    x1 = x;
    y1 = y;
    while (map[y1 | 0][x1 | 0] == 0)
    {
	x1 = (x + (k * conf.Vx));
	y1 = (y + (k * conf.Vy));
	k += 0.001;
    }
    return (k);
}

function	wall(k, x, img)
{
    var		i;
    var		j;

    i = ((600 / k));
    j = ((600 - i) / 2) | 0;
    while (j < (i + ((600 - i) / 2)) | 0)
    {
	my_put_pixel_to_image(x, j, img);
	j++;
    }
    return (img);
}
