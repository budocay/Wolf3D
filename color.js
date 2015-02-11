function        color_img(img)
{
    var         i;

    i = 0;
    while (i < 800 * 300 * 4)
    {
        img.data[i] = 30;
        img.data[i + 1] = 144;
        img.data[i + 2] = 255;
        img.data[i + 3] = 255;
        i = i + 4;
    }
    while (img.data[i] != null)
    {
        img.data[i] = 34;
        img.data[i + 1] = 139;
        img.data[i + 2] = 34;
        img.data[i + 3] = 255;
        i = i + 4;
    }
}

function	my_put_pixel_to_image(x, y, img)
{
    var		pixel;

    pixel = ((y * 800 * 4) + x * 4);
    img.data[pixel++] = 128;
    img.data[pixel++] = 128;
    img.data[pixel++] = 128;
    img.data[pixel++] = 255;
    return (img);
}
