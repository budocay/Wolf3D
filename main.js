function	tab_file(file, i, conf)
{
    var		tab;
    var		j;

    j = 0;
    tab = [];
    if (file[i] != '1' && file[i] != '0')
	console.log("impossible de charger la map");
    while (file[i] != '\n' && file[i] != null)
    {
	if (file[i] == '1')
	{
	    tab[j] = 1;
	    j++;
	}
	if (file[i] == '0')
	{
	    tab[j] = 0;
	    j++;
	}
	i++;
    }
    return (tab);
}

function	parse(file, conf)
{
    var		i;
    var		j;
    var		tab;

    i = 0;
    j = 0;
    tab = [];
    while (file[i] != null)
    {
	tab[j] = tab_file(file, i, conf);
	j++;
	while (file[i] != '\n' && file[i] != null)
	    i++;
	if (file[i] == '\n')
	    i++;
    }
    return (tab);
}

function	main()
{
    var         conf =
        {
	    win : 0,
            P : 1,
            x1 : 0.5,
            a : 0,
            x0 : 3,
            y0 : 1,
            y1 : 0,
            xprim : 0,
            yprim : 0,
            xprimp : 0,
            yprimp : 0,
            Vx : 0,
            Vy : 0,
	    img : null,
	    map : null
        }

    mlj_init("Wolf3D");
    conf.win = mlj_new_window(800, 600,"#00BFFF");
    conf.img = mlj_new_image(conf.win, 800, 600);
    mlj_upload_button(parse_aff, conf);
    mlj_key_hook(move_map, conf);
    color_img(conf.img);
    mlj_put_image_to_window(conf.win, conf.img, 0, 0);
}
