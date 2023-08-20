# Pokédex Tutorial

Please visit the [documentation](https://lemonpole.gitbook.io/pokedex-tutorial/) for a step-by-step guide on how to recreate this project's final product.

## Cropping and Creating GIFs

> 📝 **NOTE**: You will need to install [ffmpeg](https://ffmpeg.org/download.html) and ensure it is available in your `PATH` environment variable.

In working on this tutorial it may be necessary to create a GIF and crop it as well.

Below is how to make a _high quality_ GIF while cropping from the original source.

```bash
ffmpeg -y -i input.mp4 -vf "crop=485:400:2:1,fps=10,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" output.gif
```

The crop syntax is:

- Width
- Height
- X offset
- Y offset
