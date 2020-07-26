const docs = [
	{
		name: "Intro",
		description: `NightFox’s Lib for LibNDS.<br>Reference manual.<br>Version 20120318<br><br><br>http://www.nightfoxandco.com<br>http://www.nightfoxandco.com/forum<br>contact@nightfoxandco.com`
	},
	{
		name: "How to install",
		description: `Copy the NFLIB folder in the root of your project folder.<br><br>To use it, just put in your code<br>#include <nf_lib.h><br><br>Copy also to the root folder of your project the files<br>“makefile” and “icon.bmp”. You must modify those files to<br>adapt them to your project.`
	},
	{
		name: "#include “nf_basic.h”",
		description: ``,
		function: [
			{
				name: "NF_Error",
				description: `void NF_Error( u16 code,             // Error code<br>               const char* text,     // Description<br>               u32 value             // Additional info<br>               );<br><br>Generates a error and stops program execution, showing on the screen the error.<br>This command it’s internaly used by the lib to generate debug messages and rarely will<br>be used in you code.<br><br>Example:<br><br>NF_Error(112, “Sprite”, 37);<br><br>Generates a error with code 112, with the text “sprite” as description and a value of<br>37.`,
			},
			{
				name: "NF_SetRootFolder",
				description: `void NF_SetRootFolder( const char* folder   // Name of your root folder<br>                       );<br><br>Defines the root folder of your project then inits the filesystem (FAT or NitroFS).<br>This makes easy change the name of folder that contains all files of your project after<br>it’s compiled. It’s imperative the use of this function before load any file from FAT.<br>If you want to use NitroFS, use “NITROFS” as root folder name. You must copy the right<br>MAKEFILE on the root of your project to enable NitroFS usage. Also you has to put all<br>files you want to load in “nitrofiles” folder.<br><br>Example:<br><br>NF_SetRootFolder(“mygame”);<br><br>Define “mygame” folder as root for your project, using FAT.<br><br>If you flashcard don’t supports ARGV, use Homebrew Menu to launch the ROM.`,
			},
			{
				name: "NF_DmaMemCopy",
				description: `void NF_DmaMemCopy(   void* destination,    // Destination pointer<br>                      const void* source,   // Source pointer<br>                      u32 size              // Number of bytes to copy<br>                      );<br><br>Function to fast copy blocks of memory from RAM to VRAM (because it’s the kind of copy<br>where DMA copy it’s most effective). The function checks if data it’s aligned for DMA<br>copy, if not, uses memcpy(); command insead.<br><br>Example:<br><br>NF_DmaMemCopy((void*)0x06000000, buffer, 131072);<br><br>Copy to 0x06000000 memory adress of VRAM (Bank A), 131072 bytes of memory (128kb) from<br>“buffer” pointer on RAM.`,
			},
			{
				name: "NF_GetLanguage",
				description: `u8 NF_GetLanguage(void);<br><br>Returns the user language ID.<br>0 : Japanese<br>1 : English<br>2 : French<br>3 : German<br>4 : Italian<br>5 : Spanish<br>6 : Chinese<br>#include “nf_2d.h”`,
			},
		]
	},
	{
		name: "#include “nf_2d.h”",
		description: ``,
		function: [
			{
				name: "NF_Set2D",
				description: `void NF_Set2D( u8 screen,    // Screen (0 – 1)<br>               u8 mode       // Mode (0, 2, 5)<br>               );<br><br>Init 2D mode for the selected screen.<br><br> Mode          Configuration<br>------        -------------------------------------<br>0             Tiled Bg’s at 256 colors.<br>2             Affine Bg’s of 8 bits in layers 2 & 3<br>5             Bitmap Bg’s at 8 or 16 bits.<br><br><br>Example:<br><br>NF_Set2D(1, 0);<br><br>Init 2D mode for Tiled Bg’s and Sprites on screen 1 (bottom)`,
			},
			{
				name: "NF_ShowBg",
				description: `void NF_ShowBg(       u8 screen,    // Screen (0 – 1)<br>                      u8 layer      // Layer (0 – 3)<br>                      );<br><br>Makes visible the bg of layer & screen selected.<br>Use this command to make visible a bg previus hide with NF_HideBg();<br><br>Example:<br><br>NF_ShowBg(0, 2);<br><br>Makes visible the bg of layer 2 in screen 0 (top)`,
			},
			{
				name: "NF_HideBg",
				description: `void NF_HideBg(       u8 screen,    // Screen (0 – 1)<br>                      u8 layer      // Layer (0 – 3)<br>                      );<br><br>Hides, without delete, the bg of layer & screen selected.<br><br>Example:<br><br>NF_HideBg(0, 2);<br><br>Makes invisible the bg of layer 2 in screen 0.`,
			},
			{
				name: "NF_ScrollBg",
				description: `void NF_ScrollBg(     u8 screen,    //   Screen (0 – 1)<br>                      u8 layer,     //   Layer (0 – 3)<br>                      s16 x,        //   Position X<br>                      s16 y         //   Position Y<br>                      );<br><br>Moves to the coordinates the bg of layer & screen selected.<br><br>Example:<br>NF_ScrollBg(0, 1, 128, 96);<br><br>Moves the bg of layer 1 and screen 0 to the coordinates x:128, y:96`,
			},
			{
				name: "NF_MoveSprite",
				description: `void NF_MoveSprite(    u8 screen,    //   Screen (0 – 1)<br>                       u8 id,        //   Id. of Sprite (0 – 127)<br>                       s16 x,        //   Position X<br>                       s16 y         //   Position Y<br>                       );<br><br>Move a sprite to the position specified.<br><br>Example:<br><br>NF_MoveSprite(0, 35, 100, 50);<br><br>Moves the sprite nº35 of screen 0 to the coordinates x:100, y:50`,
			},
			{
				name: "NF_SpriteLayer",
				description: `void NF_SpriteLayer(   u8 screen,    // Screen (0 – 1)<br>                       u8 id,        // Id. of Sprite (0 – 127)<br>                       u8 layer      // Layer (0 – 3)<br>                       );<br><br>Selects the layer where a Sprite will be draw. Layer 0 is the higher one and layer 3 the<br>lower.<br><br>Example:<br><br>NF_SpriteLayer(1, 35, 2);<br><br>The Sprite nº35 of screen 1 will be draw over layer nº2.`,
			},
			{
				name: "NF_ShowSprite",
				description: `void NF_ShowSprite(    u8 screen,    // Screen (0 – 1)<br>                       u8 id,        // Id. of Sprite (0 – 127)<br>                       bool show     // Visivility<br>                       );<br><br>Show or hides a Sprite. If you hide it, sprite just becomes invisible, without delete<br>it.<br><br>Example:<br><br>NF_ShowSprite(0,35, false);<br><br>Hides the sprite nº35 on screen 0.<br><br>NF_ShowSprite(1, 45, true);<br><br>Makes visible the Sprite nº45 on screen 1.`,
			},
			{
				name: "NF_HflipSprite",
				description: `void NF_HflipSprite(   u8 screen,    // Screen (0 – 1)<br>                       u8 id,        // Id. of Sprite (0 – 127)<br>                       bool hflip    // Horizontal flip<br>                       );<br><br>Changes the state of horizontaly flip of a Sprite.<br>Example:<br><br>NF_HflipSprite(0, 35, true);<br><br>Flips horizontaly the sprite nº35 of screen 0.`,
			},
			{
				name: "NF_GetSpriteHflip",
				description: `bool NF_GetSpriteHflip(        u8 screen,      // Screen (0 – 1)<br>                               u8 id           // Id. of Sprite (0 – 127)<br>                               );<br><br>Get’s the state of horizontal flip of sprite.<br><br>Example:<br><br>state = NF_GetSpriteHflip(0, 35);<br><br>Stores on “state” variable if sprite nº35 of screen 0 it’s flipped or not.`,
			},
			{
				name: "NF_VflipSprite",
				description: `void NF_VflipSprite(   u8 screen,     // Screen (0 – 1)<br>                       u8 id,         // Id. of Sprite (0 – 127)<br>                       bool vflip     // Vertical Flip<br>                       );<br><br>Changes the state of vertical flip of sprite.<br><br>Example:<br><br>NF_VflipSprite(0, 35, true);<br><br>Flips verticaly the sprite nº35 on screen 0.`,
			},
			{
				name: "NF_GetSpriteVflip",
				description: `bool NF_GetSpriteVflip(        u8 screen,      // Screen (0 – 1)<br>                               u8 id           // Id. of Sprite (0 – 127)<br>                               );<br><br>Get’s the state of vertical flip of sprite.<br><br>Example:<br><br>state = NF_GetSpriteVflip(0, 35);<br><br>Stores on “state” variable the state of vertical flip of sprite nº35 on screen 0.`,
			},
			{
				name: "NF_SpriteFrame",
				description: `void NF_SpriteFrame(   u8 screen,     // Screen (0 – 1)<br>                       u8 id,         // Id. of Sprite (0 – 127)<br>                       u8 frame       // Frame<br>                       );<br><br>Selects what frame of an animation has to show the sprite.<br><br>Example<br><br>NF_SpriteFrame(0, 20, 5);<br><br>Sprite nº20 of screen 0 shows the frame nº5.`,
			},
			{
				name: "NF_EnableSpriteRotScale",
				description: `void NF_EnableSpriteRotScale( u8 screen,                //   Screen   (0 – 1)<br>                              u8 sprite,                //   Id. of   Sprite (0 – 127)<br>                              u8 id,                    //   RotSet   to use (0 – 31)<br>                              bool doublesize           //   Enable   doublesize?<br>                              );<br><br>Makes a Sprite available to be rotated & scaled. You must specify what rotset of 32<br>availables will use the sprite. Various sprites can share the same rotset. If<br>“doublesize” is disabled, the max size for sprites be 32x32, otherwise sprite will be<br>clipped. If you enable the RotScale for sprite, flip states will be ignored.<br><br>Example:<br><br>NF_EnableSpriteRotScale(1, 111, 12, false);<br><br>Enables the Rotation & Scalation for sprite nº111 on screen 1, using the RotSet nº12,<br>with “doublesize” disabled.`,
			},
			{
				name: "NF_DisableSpriteRotScale",
				description: `void NF_DisableSpriteRotScale(       u8 screen,         // Screen (0 – 1)<br>                                     u8 sprite          // Id. of Sprite (0 – 127)<br>                                     );<br><br>Disables the rotation & scalation of sprite.<br><br>Example:<br><br>NF_DisableSpriteRotScale(0, 46);<br><br>Disable rotation & scalation of sprite nº46 of screen 0.`,
			},
			{
				name: "NF_SpriteRotScale",
				description: `d NF_SpriteRotScale(      u8 screen,        //   Screen (0 – 1)<br>                             u8 id,            //   RotSet number (0 – 31)<br>                             s16 angle,        //   Angle (-512 a 512)<br>                             u16 sx,           //   Scale X (0 a 512) 100% = 256<br>                             u16 sy            //   Scale Y (0 a 512) 100% = 256<br>                             );<br><br>Setup the rotation & scalation values of a RotSet. All sprites asinged to this RotSet<br>will rotate and scale using those values. Rotation angles is in 512 base. This mean the<br>rotation will go from -512 to 512 (-360º to 360º). Scale values goes from 0 to 512. The<br>100% scale will be 256 value.<br><br>Ejemplo:<br><br>NF_SpriteRotScale(0, 16, 128, 256, 256);<br><br>Rotate 90º to the right all Sprites with the RotSet nº16 asigned, with 100% scale in<br>both directions, on screen 0.<br><br>NF_SpriteRotScale(1, 10, -256, 512, 256);<br><br>Rotate 180º to the left all Sprites with the RotSet nº10 asigned, scaling the X size<br>200% and 100% the Y size, on screen 1.<br>#include “nf_tiledbg.h”`,
			},
			{
				name: "NF_InitTiledBgBuffers",
				description: `void NF_InitTiledBgBuffers(void);<br><br>Init all buffers and variables to can load files from FAT to create Tiled Bg’s later.<br>Use this function one time before load any bg from FAT.<br><br>Example:<br><br>NF_InitTiledBgBuffers();<br><br>Init buffers and variables to load tiled bg’s.`,
			},
			{
				name: "NF_ResetTiledBgBuffers",
				description: `void NF_ResetTiledBgBuffers(void);<br><br>Reset all buffers & variables for tiled bg’s load from FAT. This function empty all<br>buffers in use and reset variable values to default.<br>It’s usefull do this when you change a level in a game, to clean all stuff from RAM and<br>make free space to load the new one.<br><br>Example:<br><br>NF_ResetTiledBgBuffers();<br><br>Empty all buffers and reset variable values.`,
			},
			{
				name: "NF_InitTiledBgSys",
				description: `void NF_InitTiledBgSys(      u8 screen         // Pantalla<br>                             );<br><br>Init the tiled bg engine for the screen selected.<br>Init all variables to control bg’s, tiles, palettes and maps.<br>Configure VRAM to use 128kb for bg’s.<br>Activate all 4 layers to use with tiled bg’s.<br>Reserve 8 banks of 16kb for tiles (2 for maps, 6 for tiles)<br>Reserve 16 banks of 2kb for maps (The 2 firsts banks of tiles will be used for this).<br>Enable extended palettes.<br>Total VRAM for tiles 96kb.<br>Total VRAM for maps 32kb.<br>You can change those editing the value of those defines:<br><br>#define NF_BANKS_TILES 8<br>#define NF_BANKS_MAPS 16<br><br>If you edit it, remember for every 8 map banks 1 tile bank it’s used.<br>If not realy needed, just left the default value set.<br><br>You must use it before use any tiled bg.<br><br>Example:<br><br>NF_InitTiledBgSys(1);<br><br>Init tiled bg system for screen 1.`,
			},
			{
				name: "NF_LoadTiledBg",
				description: `void NF_LoadTiledBg(   const char* file,    //   File name, without extension<br>                       const char* name,    //   Name for the bg<br>                       u16 width,           //   Width of the bg in pixels<br>                       u16 height           //   Height of the bg in pixels<br>                       );<br><br>Load all files needed to create a tiled bg from FAT to RAM. All files for a bg must have<br>the same name, using IMG extension for tiles files, MAP for map files and PAL for<br>palette files.<br>Check GRIT folder for more info about bg files conversion. (GRIT comes with DevKitArm).<br>You can load up to 32 bg’s at time.<br>You can modify it, editing this define:<br><br>#define NF_SLOTS_TBG 32<br><br>Example:<br><br>NF_LoadTiledBg(“stage1/mainstage”, “mifondo”, 2048, 256);<br><br>Load to RAM the files “mainstage.img”, “mainstage.map” y “mainstage.pal” from “stage1”<br>subfolder and call it “mifondo”. Also store the size of the bg (2048 x 256).`,
			},
			{
				name: "NF_UnloadTiledBg",
				description: `void NF_UnloadTiledBg( const char* name     // Name of the bg<br>                       );<br><br>Delete from RAM the bg with the name specified.<br>You can delete from RAM the bg if you don’t need it more or if bg’s size is less or<br>equal to 512 x 512. If it’s bigger, you must keep it on RAM until you don’t need it<br>more.<br><br>Example:<br><br>NF_UnloadTiledBg(“mifondo”);<br><br>Delete from RAM the bg with name “mifondo” and mark as free the slot it uses.`,
			},
			{
				name: "NF_CreateTiledBg",
				description: `void NF_CreateTiledBg( u8 screen,           // Screen (0 – 1)<br>                       u8 layer,            // Layer (0 – 3)<br>                       const char* name     // Bg name<br>                       );<br><br>Create a bg on screen, using data loaded in RAM, on the screen and layer specified.<br>This function copy to VRAM all data needed.<br>Before you create the bg, you must load data to RAM using NF_LoadTiledBg();<br><br>Example:<br><br>NF_CreateTiledBg(0, 3, “mifondo”);<br><br>Create a tiled bg on layer nº3 of screen 0, using the bg data with “mifondo” name.`,
			},
			{
				name: "NF_DeleteTiledBg",
				description: `void NF_DeleteTiledBg( u8 screen,    // Screen (0 – 1)<br>                       u8 layer      // Layer (0 – 3)<br>                       );<br><br>Delete the bg of screen and layer specified.<br>This also delete from VRAM the data used by this bg.<br><br>Example:<br><br>NF_DeleteTiledBg(0, 3);<br><br>Delete the tiled bg from layer nº3 of screen 0.`,
			},
			{
				name: "NF_LoadTilesForBg",
				description: `void NF_LoadTilesForBg(const char* file,      //   File name, without extension<br>                      const char* name,       //   Name for the bg<br>                      u16 width,              //   Width of the bg in pixels<br>                      u16 height              //   Height of the bg in pixels<br>                      u16 tile_start,         //   First tile to load<br>                      u16 tile_end            //   Last tile to load<br>                      );<br><br>Load a tilesed and palette from FAT to RAM, in the way NF_LoadTiledBg(); does but you<br>can specify the range of tiles to load. Also, no map it’s loaded, insead a blank map of<br>the given size it’s created.<br>The background it’s created using NF_CreateTiledBg(); function.<br><br>Example:<br><br><br>NF_LoadTilesForBg(“stage1/mainstage”, “mifondo”, 256, 256, 0, 23);<br><br>Load on RAM the tiles from nº0 to nº23 (24 tiles in total) from “mainstage.img” file and<br>the palette (from “mainstage.pal”) file, from “stage1” subfolder and asign the “mifondo”<br>name to the background. Inform also the size of background is 256x256 pixels. This<br>creates a 32x32 tiles blank map.`,
			},
			{
				name: "NF_GetTileOfMap",
				description: `u16 NF_GetTileOfMap(   u8 screen,    //   Screen (0 – 1)<br>                       u8 layer,     //   Layer (0 – 3)<br>                       u16 tile_x,   //   Position X (in tiles)<br>                       u16 tile_y    //   Position Y (in tiles)<br>                       );<br><br>Get the value of tile on X & Y coordinates of map loaded on the specified screen &<br>layer.<br><br>Example:<br><br>u16 mytile = NF_GetTileOfMap(0, 2, 10, 20);<br><br>Gets the value of the tile in x:20 y:10 of the map loaded on screen 0, layer 2.`,
			},
			{
				name: "NF_SetTileOfMap",
				description: `void NF_SetTileOfMap( u8 screen,       //   Screen (0 – 1)<br>                      u8 layer,        //   Layer (0 – 3)<br>                      u16 tile_x,      //   Position X (in tiles)<br>                      u16 tile_y,      //   Position Y (in tiles)<br>                      u16 tile         //   New value for the tile<br>                      );<br><br>Changes the value of tile on X & Y coordinates of map loaded on the specified screen &<br>layer.<br><br>Example:<br><br>NF_SetTileOfMap(0, 2, 10, 20, 5);<br><br>Changes to “5” the value of the tile in x:20 y:10 of the map loaded on screen 0, layer<br>2.`,
			},
			{
				name: "NF_UpdateVramMap",
				description: `void NF_UpdateVramMap( u8 screen,      // Screen (0 – 1)<br>                       u8 layer        // Layer (0 – 1)<br>                       );<br><br>Updates the map of screen & layer specified. This updates the map on VRAM with the copy<br>of RAM, that can be modified. Use this fuction to applies changes made with<br>NF_SetTileOfMap(); function.<br><br>Example:<br><br>NF_UpdateVramMap(0, 2);<br><br>Updates the MAP on VRAM with the modified copy of RAM of screen 0, layer 2.`,
			},
			{
				name: "NF_BgSetPalColor",
				description: `void NF_BgSetPalColor( u8   screen,    //   Screen (0 – 1)<br>                       u8   layer,     //   Layer (0 – 3)<br>                       u8   number,    //   Color number (0 – 255)<br>                       u8   r,         //   Value for R (0 – 31)<br>                       u8   g,         //   Value for G (0 – 31)<br>                       u8   b          //   Value for B (0 – 31)<br>                       );<br><br>Changes the value of one color of the palette of background on layer and screen<br>specified. The change is made directly on VRAM, soo better don’t abuse of it because<br>this can change undesired effect. Use this one time for cycle only (like change the<br>color of text).<br><br>Example:<br><br>NF_BgSetPalColor(0, 3, 1, 31, 0, 0);<br><br>Change the value of color nº1 of the palette of layer 3 on top screen to red.<br>If this layer is a text layer with default font, the text becomes red.`,
			},
			{
				name: "NF_BgEditPalColor",
				description: `void NF_BgEditPalColor(       u8    screen,       //   Screen (0 – 1)<br>                              u8    layer,        //   Layer (0 – 3)<br>                              u8    number,       //   Color number (0 – 255)<br>                              u8    r,            //   Value for R (0 – 31)<br>                              u8    g,            //   Value for G (0 – 31)<br>                              u8    b             //   Value for B (0 – 31)<br>                              );<br><br>Changes the value of one color of the palete of background on layer and screen<br>specified. The change is made over the RAM copy of the palette, soo you dont see any<br>change until you update it on VRAM with NF_BgUpdatePalette(); function. Use this<br>function to make cool effect on your tiled backgrounds.<br><br>Example:<br><br>NF_BgSetPalColor(0, 3, 1, 31, 0, 0);<br><br>Change the value of color nº1 of the palette of layer 3 on top screen to red.`,
			},
			{
				name: "NF_BgUpdatePalette",
				description: `void NF_BgUpdatePalette(      u8 screen,          // Screen (0 – 1)<br>                              u8 layer            // Layer (0 – 3)<br>                              );<br><br>Updates on VRAM the palette of specified background with the RAM copy of it.<br><br>Example:<br><br>NF_BgUpdatePalette(1, 2);<br><br>Updates the palette of layer 2 of the bottom screen.`,
			},
			{
				name: "NF_BgGetPalColor",
				description: `void NF_BgGetPalColor( u8 screen,       //    Screen (0 – 1)<br>                       u8 layer,        //    Layer (0 – 3)<br>                       u8 number,       //    Color number (0 – 255)<br>                       u8* r,           //    R value (0 – 31)<br>                       u8* g,           //    G value (0 – 31)<br>                       u8* b            //    B value (0 – 31)<br>                       );<br><br>Gets the RGB value of a color of palette loaded on RAM of the background in layer and<br>screen specified.<br><br>Example:<br><br>u8 red;<br>u8 green;<br>u8 blue;<br>NF_BgGetPalColor(1, 3, 200, &red, &green, &blue);<br><br>Gets the RGB value of color number 200 of layer 3 on bottom screen, and store it into<br>“red”, “green” and “blue” variables.`,
			},
			{
				name: "NF_GetTilePal",
				description: `extern u8 NF_GetTilePal(      u8 screen,       //   Screen (0 – 1)<br>                              u8 layer,        //   Layer (0 – 3)<br>                              u16 tile_x,      //   X position of tile (in tiles)<br>                              u16 tile_y       //   Y posicion of tile (in tiles)<br>                              );<br><br>Returns the number of extended palette used by specified tile. By default, all tiles<br>uses extended palette nº0.<br><br>Example:<br><br>palette = NF_GetTilePal(0, 3, 20, 10);<br><br>Returns the extended palette used by tile on position 20, 10 of layer 3 on top screen.`,
			},
			{
				name: "NF_SetTilePal",
				description: `void NF_SetTilePal(    u8 screen,    //    Screen (0 – 1)<br>                       u8 layer,     //    Layer (0 – 3)<br>                       u16 tile_x,   //    X position of tile (in tiles)<br>                       u16 tile_y,   //    Y position of tile (in tiles)<br>                       u8 pal        //    nº of extended palette (0 – 15)<br>                       );<br><br>Sets the extended palette to use for the tile especified. The palette has to be loaded<br>on VRAM, and the changes don’t be visible until you use the NF_UpdateVramMap(); function<br>because all operations are done on RAM copy of the map.<br><br>Example:<br><br>NF_SetTilePal(0, 3, 20, 10, 2);<br><br>Sets tile on position 20, 10 of layer 3 on top screen to use the extended palette nº2.`,
			},
			{
				name: "NF_LoadExBgPal",
				description: `void NF_LoadExBgPal(   const char* file,       // File (extension .pal)<br>                       u8 slot                 // slot nº on RAM (0 - 127)<br>                       );<br><br>Load on RAM a palette file to can use it later as background extended palette.<br><br>Example:<br><br>NF_LoadExBgPal(“bg/sunset”, 3);<br><br>Loads the “bg/sunset.pal” file from file system to RAM slot nº3.`,
			},
			{
				name: "NF_UnloadExBgPal",
				description: `void NF_UnloadExBgPal(u8 slot);      // Slot nº (0 – 127)<br><br>Deletes from RAM a loaded palette.<br><br>Example:<br><br>NF_UnloadExBgPal(5);<br><br>Erase from RAM the palette loaded on slot nº5. If the palette it’s already transfered to<br>VRAM, you can still use it.`,
			},
			{
				name: "NF_VramExBgPal",
				description: `void NF_VramExBgPal(   u8   screen,   //   Screen (0 – 1)<br>                       u8   layer,    //   Layer (0 – 3)<br>                       u8   id,       //   Slot nº of palette on RAM<br>                       u8   slot      //   nº of extended palette on VRAM<br>                       );<br><br>Transfers from RAM to VRAM a palette to be used as extended palette.<br><br>Example:<br><br>NF_VramExBgPal(0, 3, 100, 10);<br><br>Transfers the palette from RAM slot nº100 to VRAM of layer nº3 on top screen, to be used<br>as extended palette nº10.`,
			},
			{
				name: "NF_SetExBgPal",
				description: `void NF_SetExBgPal(    u8 screen,     // Screen (0 – 1)<br>                       u8 layer,      // Layer (0 – 3)<br>                       u8 pal         // Extended palette (0 – 15)<br>                       );<br><br>Sets the extended palette to be used on background of layer and screen specified.<br><br>Example:<br><br>NF_SetExBgPal(0, 3, 5);<br><br>The backgroun on layer 3 of top screen, uses the extended palette nº 5.`,
			},
			{
				name: "NF_SetTileHflip",
				description: `void NF_SetTileHflip( u8 screen,      //   Screen (0 – 1)<br>                      u8 layer,       //   Layer (0 – 3)<br>                      u16 tile_x,     //   Position X of tile (in tiles)<br>                      u16 tile_y      //   Position Y of tile (in tiles)<br>                      );<br><br>Inverts the horizontal flip status of a tile in the specified map.<br><br>Example:<br><br>NF_SetTileHflip(0, 1, 10, 20);<br><br>Inverts horizontaly the tile in the position x10, y20 of layer 1 map of top screen.`,
			},
			{
				name: "NF_SetTileVflip",
				description: `void NF_SetTileVflip( u8 screen,      //   Screen (0 – 1)<br>                      u8 layer,       //   Layer (0 – 3)<br>                      u16 tile_x,     //   Position X of tile (in tiles)<br>                      u16 tile_y      //   Position Y of tile (in tiles)<br>                      );<br><br>Inverts the vertical flip status of a tile in the specified map.<br><br>Example:<br><br>NF_SetTileVflip(0, 1, 10, 20);<br>Inverts verticaly the tile in the position x10, y20 of layer 1 map of top screen.`,
			},
			{
				name: "NF_RotateTileGfx",
				description: `void NF_RotateTileGfx( u8 slot,      // Slot<br>                       u16 tile,     // nº of tile<br>                       u8 rotation   // rotation orientation<br>                       );<br><br>Rotates the Gfx of a tile in the indicated direction. The tile gfx rotated it’s the one<br>in the buffer of slot specified.<br><br>Rotation values:<br>1 – 90º right<br>2 – 90º left<br>3 – 180º<br><br><br>Example:<br><br>NF_RotateTileGfx(3, 76, 2);<br><br>Rotates 90º left the tile nº76 of the buffer in slot 3.`,
			},
		]
	},
	{
		name: "#include “nf_sprite256.h”",
		description: ``,
		function: [
			{
				name: "NF_InitSpriteBuffers",
				description: `void NF_InitSpriteBuffers(void);<br><br>Init buffers and variables to can load from FAT all files needed to create 256c sprites.<br>You must use this function one time before load any file for sprite creation.<br><br>Example:<br><br>NF_InitSpriteBuffers();<br><br>Init buffers & variables for sprite files loading.`,
			},
			{
				name: "NF_ResetSpriteBuffers",
				description: `void NF_ResetSpriteBuffers(void);<br><br>Reset the buffer system of sprites, clearing the buffers and reseting to default all<br>variables. You can use it at level change, to free RAM used and make space for new<br>stuff.<br><br>Example:<br><br>NF_ResetSpriteBuffers();<br><br>Empty all sprite buffers and reset to default all variables.`,
			},
			{
				name: "NF_InitSpriteSys",
				description: `void NF_InitSpriteSys(     u8 screen          // Screen<br>                          [u8 vram_mapping]   // VRAM mapping mode (64 or 128)<br>                         );<br><br>Init Sprite system on the specified screen.<br>Asign 128kb of VRAM for gfx and palettes.<br>Enable extended palettes.<br>VRAM_MAPPING parameter is optional, if you don’t set it, 64 it’s set by default.<br>You can use up to 1024 chunks of 64 bytes (Mapping 64 mode) or of 128 bytes (Mapping 128<br>mode) and 16 palettes. The use of Mapping 64 limits the amount of usable VRAM to 64kb.<br>In case of use Mapping 128, 8x8 pixels Sprites can’t be used.<br>Init OAM with default parameters.<br><br>Example:<br><br>NF_InitSpriteSys(0);<br>NF_InitSpriteSys(1, 128);<br><br>Init 256c Sprites system for screen 0 in “Map64” mode and on screen 1 in “Map128” mode.`,
			},
			{
				name: "NF_LoadSpriteGfx",
				description: `void NF_LoadSpriteGfx( const char* file,      //   Filename without extension<br>                       u16 id,                //   Slot number (0 – 255)<br>                       u16 width,             //   Width of Gfx (in pixels)<br>                       u16 height             //   Height of Gfx (in pixels)<br>                       );<br><br>Load from FAT to RAM a Gfx to use later in sprite creation. You must specify the<br>filename without extension. You must use the IMG extension on the filename of you sprite<br>gfx. You must select the RAM slot where load the Gfx (0 to 255), and the gfx sizes. If<br>it’s a animated sprite gfx, just put the size in pixels of first frame.<br>You have 256 available slots, if you need edit it, just change this define:<br><br>#define NF_SLOTS_SPR256GFX 256<br><br><br><br><br>Example:<br><br>NF_LoadSpriteGfx(“stage3/nave”, 100, 64, 32);<br><br>Load the file “name.img” from “stage3” subfolder and store it in the slot nº100 of RAM.<br>This Gfx has a 64 x 32 pixels size.`,
			},
			{
				name: "NF_UnloadSpriteGfx",
				description: `void NF_UnloadSpriteGfx(        u16 id      // Slot number<br>                                );<br><br>Delete from RAM the gfx of selected slot and mark it as free.<br>You can delete the Gfx from RAM once sprite is created if you don’t need it more or, if<br>it’s animated, you trasnfered all frames to VRAM.<br><br>Example:<br><br>NF_UnloadSpriteGfx(100);<br><br>Delete from RAM the Gfx of Slot nº100 and mark it as free.`,
			},
			{
				name: "NF_LoadSpritePal",
				description: `void NF_LoadSpritePal( const char* file,    // Filename<br>                       u8 id                // Slot number (0 – 63)<br>                       );<br><br>Load to RAM from FAT a palette to can use it for a sprite.<br>You must enter the filename without extension. You must use PAL extension in all your<br>palette files.<br>You can store up to 64 palettes (0 – 63) in RAM. If you need change it, just edit this<br>define:<br><br>#define NF_SLOTS_SPR256PAL 64<br><br>Example:<br><br>NF_LoadSpritePal(“stage3/player”, 34);<br><br>Load the file “player.pal” from “stage3” subfolder and store it in slot nº34.`,
			},
			{
				name: "NF_UnloadSpritePal",
				description: `void NF_UnloadSpritePal(        u8 id       // Slot number (0 – 63)<br>                                );<br><br>Delete from RAM the palette of slot selected and mark it as available. You can delete it<br>if you don’t need it more or it’s already on VRAM.`,
			},
			{
				name: "NF_VramSpriteGfx",
				description: `void NF_VramSpriteGfx( u8 screen,           // Screen (0 – 1)<br>                       u16 ram,             // Gfx RAM slot (0 – 255)<br>                       u8 vram,             // Gfx VRAM slot (0 – 127)<br>                        bool keepframes         // Copy only the first frame?<br>                        );<br><br>Copy   a Gfx from RAM to VRAM of the screen selected, to can use it later on sprite. You<br>must   indicate the destination screen, the origin slot on RAM (0 – 255), the destination<br>slot   on VRAM (0 – 127), and, if it’s animated one, if you want to copy all frames to<br>VRAM   (false) or just the first one (true).<br><br><br>Example:<br><br>NF_VramSpriteGfx(1, 160, 23, false);<br><br>Copy the Gfx stored on the slot nº160 of RAM to the slot nº23 of VRAM of screen 1,<br>copying all frames if it’s animated.`,
			},
			{
				name: "NF_FreeSpriteGfx",
				description: `void NF_FreeSpriteGfx( u8 screen,      // Screen (0 – 1)<br>                       u16 id          // VRAM slot (0 – 127)<br>                       );<br><br>Delete from VRAM the Gfx of selected slot from specified screen.<br>You must don’t delete the Gfx if a sprite it’s using it, may cause sprite appears<br>corrupted of turns invisible.<br><br>Example:<br><br>NF_FreeSpriteGfx(1, 34);<br><br>Delete from VRAM of screen 1 the gfx on slot nº34.`,
			},
			{
				name: "NF_VramSpriteGfxDefrag",
				description: `void NF_VramSpriteGfxDefrag( u8 screen          // Screen (0 – 1)<br>                             );<br><br>Defrags the free VRAM used for sprites gfx. This function is automaticaly executed when<br>fragmented free VRAM it’s bigger in 50% of total free VRAM. You don’t need to execute<br>this command manualy never. You can get the state of VRAM reading those variables:<br><br>NF_SPRVRAM[u8   screen].free           <-   Total VRAM free<br>NF_SPRVRAM[u8   screen].fragmented     <-   Fragmented free VRAM<br>NF_SPRVRAM[u8   screen].inarow         <-   Largest free block of VRAM at the end<br>NF_SPRVRAM[u8   screen].lost           <-   unusable free VRAM because fragmentation.<br><br>Example:<br><br>NF_VramSpriteGfxDefrag(1);<br><br>Defrags the free VRAM of sprites of screen 1.`,
			},
			{
				name: "NF_VramSpritePal",
				description: `void NF_VramSpritePal( u8 screen,      // Screen (0 – 1)<br>                       u8 id,          // RAM slot of palette (0 – 64)<br>                       u8 slot         // VRAM slot of palette (0 – 15)<br>                       );<br><br>Copy the palette from RAM to the SLOT of extended palettes on VRAM. If slot it’a already<br>in use, the contents it’s overwrited.<br><br>Example:<br><br>NF_VramSpritePal(1, 56, 8);<br><br>Copy the palette from RAM slot nº56 to the extended palettes slot nº8 of screen 1.`,
			},
			{
				name: "NF_CreateSprite",
				description: `void NF_CreateSprite( u8 screen,    //    Screen (0 – 1)<br>                      u8 id,        //    Sprite Id (0 – 127)<br>                      u16 gfx,      //    Gfx slot (0 – 127)<br>                      u8 pal,       //    Palette slot (0 – 15)<br>                      s16 x,        //    X coordinate<br>                      s16 y         //    Y coordinate<br>                      );<br><br>Create a sprite with the Id (0 - 127) given on the selected screen, using the Gfx and<br>palette of selected slots. You must select also the coordinates where the sprite is<br>created.<br><br>Example:<br><br>NF_CreateSprite(0, 12, 30, 1, 100, 50);<br><br>Create a sprite on screen 0, with the id nº12, using the gfx stored on the slot nº30 of<br>VRAM and the palette from slot nº1. The sprite is created on the coordinates x:100,<br>y:50.`,
			},
			{
				name: "NF_DeleteSprite",
				description: `void NF_DeleteSprite( u8 screen,    // Screen (0 – 1)<br>                      u8 id         // Sprite Id.<br>                      );<br><br>Delete from screen the sprite of Id selected. The Gfx and palette used by the sprited<br>will not be deleted from VRAM.<br><br>Example:<br><br>NF_DeleteSprite(0, 12);<br><br>Delete from screen 0 the sprite with id nº12.`,
			},
			{
				name: "NF_SpriteOamSet",
				description: `void NF_SpriteOamSet( u8 screen     // Screen (0 – 1)<br>                      );<br><br>Copy the data from the temporal OAM used by this lib to the REAL OAM of libnds. Use this<br>function just before swiWaitForVBlank();<br>The OAM must be updated only during the VBLANK cycle.<br>To do that, execute the oamUpdate(&oamMain); or oamUpdate(&oamSub); depending if you’re<br>updating top or bottom screen, just after swiWaitForVBlank();<br><br>Example:<br><br>NF_SpriteOamSet(0);<br><br>Update the data of OAM of screen 0 (main).`,
			},
			{
				name: "NF_SpriteSetPalColor",
				description: `void NF_SpriteSetPalColor(      u8   screen,   //   Screen (0 – 1)<br>                                u8   pal,      //   Palette (0 – 15)<br>                                u8   number,   //   Color number (0 – 255)<br>                                u8   r,        //   Value for R (0 – 31)<br>                                u8   g,        //   Value for G (0 – 31)<br>                                u8   b         //   Value for B (0 – 31)<br>                      );<br><br>Changes the value of one color of the one sprites palette of screen specified. The<br>change is made directly on VRAM, soo better don’t abuse of it because this can change<br>undesired effect.<br><br>Example:<br><br>NF_SpriteSetPalColor(0, 3, 1, 31, 0, 0);<br><br>Change the value of color nº1 of the palette nº3 on top screen to red.`,
			},
			{
				name: "NF_SpriteEditPalColor",
				description: `void NF_SpriteEditPalColor(     u8   screen,   //   Screen (0 – 1)<br>                                u8   pal,      //   Palette (0 – 15)<br>                                u8   number,   //   Color number (0 – 255)<br>                                u8   r,        //   Value for R (0 – 31)<br>                                u8   g,        //   Value for G (0 – 31)<br>                                u8   b         //   Value for B (0 – 31)<br>                                );<br><br>Changes the value of one color on one the sprites palete of screen specified. The change<br>is made over the RAM copy of the palette, soo you dont see any change until you update<br>it on VRAM with NF_SpriteUpdatePalette(); function. Use this function to make cool<br>effect on your Sprites.<br><br>Example:<br><br>NF_SpriteSetPalColor(0, 3, 1, 31, 0, 0);<br><br>Change the value of color nº1 of the palette nº3 on top screen to red.`,
			},
			{
				name: "NF_SpriteUpdatePalette",
				description: `void NF_SpriteUpdatePalette( u8 screen,        // Screen (0 – 1)<br>                             u8 pal            // Palette (0 – 15)<br>                             );<br><br>Updates on VRAM the sprites palette specified with the RAM copy of it.<br><br>Example:<br><br>NF_SpriteUpdatePalette(1, 2);<br><br>Updates the palette nº2 of the bottom screen.`,
			},
			{
				name: "NF_SpriteGetPalColor",
				description: `void NF_SpriteGetPalColor(   u8 screen,     //   Screen (0 – 1)<br>                             u8 pal,        //   Pal (0 – 15)<br>                             u8 number,     //   Color number (0 – 255)<br>                             u8* r,         //   R value (0 – 31)<br>                             u8* g,         //   G value (0 – 31)<br>                             u8* b          //   B value (0 – 31)<br>                      );<br><br>Gets the RGB value of one color from sprites palette loaded on RAM from screen<br>specified.<br><br>Example:<br><br>u8 red;<br>u8 green;<br>u8 blue;<br>NF_SpriteGetPalColor(1, 3, 200, &red, &green, &blue);<br><br>Gets the RGB value of color number 200 from sprites palette number 3 on bottom screen,<br>and store it into “red”, “green” and “blue” variables.`,
			},
		]
	},
	{
		name: "#include “nf_text.h”",
		description: ``,
		function: [
			{
				name: "NF_InitTextSys",
				description: `void NF_InitTextSys(   u8 screen    // Screen (0 – 1)<br>                       );<br><br>Init the text engine for the selected screen.<br>You must init also the Tiled Bg’s system before use function of text engine.<br>You can get more info about it in the #include “nf_tiledbg.h” section for more info<br>about NF_InitTiledBgBuffers(); and NF_InitTiledBgSys(); functions.<br>Use this function also to reset text system.<br><br><br>Example:<br><br>NF_InitTextSys(1);<br><br>Init text engine for screen 1.`,
			},
			{
				name: "NF_LoadTextFont",
				description: `void NF_LoadTextFont( const char* file,     //   File name<br>                      const char* name,     //   Font name<br>                      u16 width,            //   Map width (in pixels)<br>                      u16 height,           //   Map height (in pixels)<br>                      u8 rotation           //   Rotation (0 – 2)<br>                      );<br><br>Load to RAM from FAT the font and palette files to can use later on a text layer.<br>You must specify the filename without extension and the name you wanna give to the font<br>and the size of the text layer you want to create, in pixels.<br>If the font includes the characters for rotated text. The values are 0: None, 1: Rotate<br>right, 2: Rotate left.<br>The font uses two files, the tileset with extension FNT and the palette with extension<br>PAL.<br>You must load the font for EVERY text layer you want to create.<br>Use this sheed to create your own fonts:<br><br><br><br><br>Example:<br><br>NF_LoadTextFont(“stage4/default”, “titulo”, 256, 256, 2);<br><br>Load the font with files “default” from “stage4” subfolder and call it “titulo”. The<br>rotation value “2” indicate you want to load only the characters rotated to the left.<br>The text layer created is of 32x32 tiles (256x256 pixels).<br>Every font loaded uses a tiled bg slot of RAM.`,
			},
			{
				name: "NF_UnloadTextFont",
				description: `void NF_UnloadTextFont(        const char* name         // Font name<br>                               );<br><br>Delete from RAM the font of name specified.<br><br>Example:<br><br>NF_UnloadTextFont(“titulo”);<br><br>Delete from RAM the font with name “titulo”.`,
			},
			{
				name: "NF_CreateTextLayer",
				description: `void NF_CreateTextLayer(       u8 screen,               //   Screen (0 – 1)<br>                               u8 layer,                //   Layer (0 – 3)<br>                               u8 rotation,             //   Rotation (0 – 2)<br>                               const char* name         //   Font name<br>                               );<br><br>Create a special tiled bg to can write text on it.<br>You must select the screen and layer where create the bg, the orientation of text and<br>the font you want to use.<br><br>Example:<br><br>NF_CreateTextLayer(1, 0, 2, “titulo”);<br><br>Create a text layer on the layer nº0 of screen nº1, using the font with name “titulo”<br>and with the text rotated to the left.`,
			},
			{
				name: "NF_DeleteTextLayer",
				description: `void NF_DeleteTextLayer(       u8 screen,      // Screen (0 – 1)<br>                               u8 layer        // Layer (0 – 3)<br>                               );<br><br>Delete a text layer.<br>You must specify the layer and screen of the text layer you want to delete.<br><br>Example:<br><br>NF_DeleteTextLayer(1, 0);<br><br>Delete the text layer of layer nº0 of the bottom screen.`,
			},
			{
				name: "NF_WriteText",
				description: `void NF_WriteText(    u8 screen,               //   Screen (0 – 1)<br>                      u8 layer,                //   Layer (0 – 3)<br>                      u8 x,                    //   Position X<br>                      u8 y,                    //   Position Y<br>                      const char* text         //   Text<br>                      );<br><br>Write a text on screen on the given coordinates. You must specify the screen and layer<br>where you want to put the text. The text it’s not wrote directly on the screen, insead,<br>it’s stored on a temporal buffer and it’s transferred to the screen when the function<br>NF_UpdateTextLayers(); is executed. This is for minimize the number of times the VRAM<br>it’s updated.<br>If you want to write variables or formated text, use the sprintf(); function and store<br>it before in a variable.<br><br>Example:<br><br>NF_WriteText(1, 0, 1, 1, “Hello World!”);<br><br>Send to temporal text buffer of bottom screen and layer nº 0 the text “Hello World!”<br><br><br>Example 2:<br><br>char text[32];<br>u16 myvar = 10;<br>sprintf(text, “Hello world %d times”, myvar);<br>NF_WriteText(1, 0, 1, 1, text);<br><br>Send to temporal text buffer of bottom screen and layer nº0 the text “Hello world 10<br>times” on coordinates x:1, y:1.`,
			},
			{
				name: "NF_UpdateTextLayers",
				description: `void NF_UpdateTextLayers(void);<br><br>Copy the temporal text buffer to VRAM of both screens.<br>Buffer it’s copied only if needed.<br><br>Example:<br><br>NF_UpdateTextLayers();<br><br>Copy, if needed the data from temporal text buffer to VRAM of both screens.`,
			},
			{
				name: "NF_ClearTextLayer",
				description: `void NF_ClearTextLayer(      u8 screen,     // Screen (0 – 1)<br>                             u8 layer       // Layer (0 – 3)<br>                             );<br><br>Cleans the contents of a layer text, writing 0 to all bytes.<br><br>Example:<br><br>NF_ClearTextLayer(0, 2);<br>Cleans the contents of text layer on screen 0, layer 2.`,
			},
			{
				name: "NF_DefineTextColor",
				description: `void NF_DefineTextColor(     u8   screen,   //   Screen (0 – 1)<br>                             u8   layer,    //   Layer (0 – 3)<br>                             u8   color,    //   Color number (0 – 15)<br>                             u8   r,        //   R value (0 – 31)<br>                             u8   g,        //   G value (0 – 31)<br>                             u8   b         //   B value (0 – 31)<br>                             );<br><br>Defines a RGB color to can be used later as text color. The color it’s stored on the<br>slot specified. To make this function works, the font palette must be indexed with 2<br>colors (Magenta/White).<br><br>Example:<br><br>NF_DefineTextColor(0, 0, 13, 15, 31, 15);<br><br>Defines the color numer 13 of layer text number 0 of top screen as light green.`,
			},
			{
				name: "NF_SetTextColor",
				description: `void NF_SetTextColor( u8 screen,    // Screen (0 – 1)<br>                      u8 layer,     // Layer (0 – 3)<br>                      u8 color      // Color (0 – 15)<br>                      );<br><br>Sets the color to use in all text wrote from this point. The text that’s already on<br>screen don’t be altered.<br><br>Example:<br><br>NF_SetTextColor(0, 0, 3);<br><br>From now, all text wrote on layer 0 of top screen will use the color stored on slot<br>number 3.`,
			},
		]
	},
	{
		name: "#include “nf_text16.h”",
		description: `Use the follow functions to use text with 8x16 pixel fonts. The normal text fuctions<br>still compatible and usable with this mode.`,
		function: [
			{
				name: "NF_LoadTextFont16",
				description: `void NF_LoadTextFont16();<br>As NF_LoadTextFont(); but for use with 8x16 pixel fonts.<br><br>You must load the font for EVERY text layer you want to create.<br>Use this sheed to create your own fonts:`,
			},
			{
				name: "NF_CreateTextLayer16",
				description: `void NF_CreateTextLayer16();<br>As NF_CreateTextLayer(); but for use with 8x16 pixels fonts.`,
			},
			{
				name: "NF_WriteText16",
				description: `void NF_WriteText16();<br>As NF_WriteText(); but for use in text layers with 8x16 pixels text fonts.`,
			},
			{
				name: "NF_ClearTextLayer16",
				description: `void NF_ClearTextLayer16();<br>As NF_ClearTextLayer();for use in text layers with 8x16 pixels text fonts.`,
			},
		]
	},
	{
		name: "#include “nf_colision.h“",
		description: ``,
		function: [
			{
				name: "NF_InitCmapBuffers",
				description: `void NF_InitCmapBuffers(void);<br><br>Init buffers to store colision map data.<br>You must use this function once in you code before load any colision map.<br>`,
			},
			{
				name: "NF_ResetCmapBuffers",
				description: `void NF_ResetCmapBuffers(void);<br><br>Reset colision map buffers, clearing all data on RAM. It’s usefull to use this function<br>on level change to easy clear all data before load the new one in just one fuction.`,
			},
			{
				name: "NF_LoadColisionMap",
				description: `void NF_LoadColisionMap(     const char* file,        //   Filename<br>                             u8 id,                   //   Slot number<br>                             u16 width,               //   Map width (in pixels)<br>                             u16 height               //   Map height (in pixels)<br>                             );<br><br>Load a colision map into ram in the specified slot. You must specify the width & height<br>of the map in pixels. Remember to make your colision map 8 pixels heighter of your<br>background and use this first row of tiles to define your tileset for colision map.<br>Use the “Convert_CMaps.bat” on GRIT folder to convert you maps. You only need to copy<br>the “.cmp” file.`,
			},
			{
				name: "NF_UnloadColisionMap",
				description: `void NF_UnloadColisionMap(u8 id);<br><br>Unload from RAM the colision map of specified slot.`,
			},
			{
				name: "NF_GetTile",
				description: `U16 NF_GetTile(u8 slot,      // Slot number<br>               u16 x,        // Position X in pixels<br>               u16 y         // Position Y in pixels<br>               );<br><br>Return the tile number (you must make your tileset in the first row of colision map) of<br>the given coordinates (in pixels) of the colision map in the slot number you has ben<br>selected.`,
			},
			{
				name: "NF_SetTile",
				description: `void NF_SetTile(      u8 slot,      //   Slot number<br>                      u16 x,        //   Position X in pixels<br>                      u16 y,        //   Position Y in pixels<br>                      u16 value     //   Value to write (0 – 16384)<br>                      );<br><br>Set the value of the tile on the position given of the colosion map loaded on the given<br>slot.`,
			},
			{
				name: "NF_LoadColisionBg",
				description: `void NF_LoadColisionBg(      const char* file,     //   File<br>                             u8 id,                //   Slot (0 – 31)<br>                             u16 width,            //   Background width<br>                             u16 height            //   Background height<br>                             );<br><br>Load a collision background into ram in the specified slot. You must specify the width &<br>height of the background in pixels. Remember to make your colision background 8 pixels<br>heighter of your real background and use this first row of tiles to define your color<br>tileset for colision background.<br>Use the “Convert_CMaps.bat” on GRIT folder to convert you maps. You need to copy the<br>“.cmp” & “.dat” files.`,
			},
			{
				name: "NF_GetPoint",
				description: `u8 NF_GetPoint(       u8 slot,      // Slot number (0 – 31)<br>                      s32 x,        // X coodinate in pixels<br>                      s32 y         // Y coordinate in pixels<br>                      );<br><br>Returns the color number (0 – 255) from the pixel of collision background specified.<br>If coordinates are outside the background, returns 0.`,
			},
		]
	},
	{
		name: "#include “nf_sound.h”",
		description: ``,
		function: [
			{
				name: "NF_InitRawSoundBuffers",
				description: `void NF_InitRawSoundBuffers(void);<br><br>Init all buffers and variables to can load and use sound files in RAW format. You must<br>use this function once before load or use any sound in RAW format. Remember to init DS<br>sound engine using soundEnable(); Libnds command.`,
			},
			{
				name: "NF_ResetRawSoundBuffers",
				description: `void NF_ResetRawSoundBuffers(void);<br><br>Reset all sound buffers and clears the data on them. It’s usefull when you change a<br>level in game, etc.`,
			},
			{
				name: "NF_LoadRawSound",
				description: `void NF_LoadRawSound( const char* file,        //   Filename<br>                      u16 id,                  //   Slot where sound will be stored (0 – 31)<br>                      u16 freq,                //   Sample frequency (en Hz)<br>                      u8 format                //   Sample format (0 – 2)<br>                      );<br><br>Load a RAW file from FAT or EFS to RAM. You must pass to the fuction the filename<br>(without extension), the slot number to where store it (0 – 31), the frequency of the<br>sample (in Hz, 11025, 22050), and the sample format (0 - > 8 bits, 1 - > 16 bits, 2 -><br>ADPCM).<br><br>Example:<br><br>NF_LoadRawSound("music", 1, 22050, 0);<br><br>Load the file “music.raw” on slot nº1. This file it’s encoded in 22050hz and 8 bits.<br><br>To convert sound files to “RAW” format i use the free program “Switch”<br>http://www.nch.com.au/switch/plus.html. The best parameters for “RAW” files on DS are, 8<br>bits signed at 11025hz o 22050hz. And remember in “Mono”.`,
			},
			{
				name: "NF_UnloadRawSound",
				description: `void NF_UnloadRawSound(u8 id);<br><br>Deletes from RAM the sound file stored in the slot specified (0 - 31).`,
			},
			{
				name: "NF_PlayRawSound",
				description: `u8 NF_PlayRawSound(   u8 id,          //   Slot number of sound to play<br>                      u8 volume,      //   Volume (0 – 127)<br>                      u8 pan,         //   Pan (0 – 64 – 127)<br>                      bool loop,      //   Loop ? (true / false)<br>                      u16 loopfrom    //   Loop start point<br>                      );<br><br>Play the sound file loaded on the slot specified. You must specify too the volume, pan,<br>and if you want to loop the sound, if true, you must set also the sample number where<br>loop starts.<br>This fuction also returns the channel number asigned to the playback.<br>Example:<br><br>NF_PlayRawSound(1, 127, 64, true, 0);<br><br>Play the sound stored on slot number 1, with full volume (127), pan centered (64), with<br>loop enabled from first sample.`,
			},
		]
	},
	{
		name: "Sound Extra",
		description: `You can use the rest of Libnds sound fuctions for pause, stop, volume, because they are<br>easy enough.<br><br>http://libnds.devkitpro.org/a00099.html`,
	},
	{
		name: "#include “nf_bitmapbg.h”",
		description: ``,
		function: [
			{
				name: "NF_Init16bitsBgBuffers",
				description: `void NF_Init16bitsBgBuffers(void);<br><br>Inits the buffers for 16 bits backgrounds.<br>Use this function 1 time before use any buffer.`,
			},
			{
				name: "NF_Reset16bitsBgBuffers",
				description: `void NF_Reset16bitsBgBuffers(void);<br><br>Resets 16 bits buffer and cleans the RAM contens. Usefull to ensure the data it’s<br>deleted from RAM on stage changes, etc.`,
			},
			{
				name: "NF_Init16bitsBackBuffer",
				description: `void NF_Init16bitsBackBuffer( u8 screen      // Screen (0 – 1)<br>                              );<br><br>Inits the 16 bits backbuffer of the selected screen. Use this function one time before<br>use the backbuffer.`,
			},
			{
				name: "NF_Enable16bitsBackBuffer",
				description: `void NF_Enable16bitsBackBuffer(       u8 screen     // Screen (0 – 1)<br>                              );<br><br>Enables backbuffer for the selected screen. If the backbuffer it’s alerady enabled, the<br>contents it’s deleted.`,
			},
			{
				name: "NF_Disble16bitsBackBuffer",
				description: `void NF_Disble16bitsBackBuffer(       u8 screen     // Screen (0 – 1)<br>                              );<br><br>Disables the backbuffer of selected screen, erasing the contents of it and frees the RAM<br>used (128kb);`,
			},
			{
				name: "NF_Flip16bitsBackBuffer",
				description: `void NF_Flip16bitsBackBuffer( u8 screen      // Screen (0 – 1)<br>                              );<br><br>Sends the contents of Backbuffer to the VRAM of selected screen, showing the image<br>stored on it.`,
			},
			{
				name: "NF_InitBitmapBgSys",
				description: `void NF_InitBitmapBgSys(     u8 screen,      // Screen (0 – 1)<br>                             u8 mode         // Color mode (0 – 1)<br>                             );<br><br>Inits the screen specified in “bitmap” mode, with the color deep given (8 or 16 bits).<br>DS 2D engine must be set at mode 5.<br>0 – 8 bits (256 colors)<br>1 – 16 bits<br><br>Example:<br><br>NF_InitBitmapBgSys(0, 1);<br><br>Sets top screen in “bitmap” mode with 16 bits color deep.`,
			},
			{
				name: "NF_Load16bitsBg",
				description: `void NF_Load16bitsBg( const char* file,       // File<br>                      u8 slot                 // Slot number (0 – 15)<br>                      );<br><br>Loads from FAT or EFS a 16 bits image file in binary format (*.img) with 256x256 pixeles<br>max size (128kb). You must convert the file using this GRIT command line:<br><br>grit.exe file.ext -gb -gB16 –ftb<br><br>You can load the amount of files defined on #define NF_SLOTS_BG16B.<br><br>Example:<br><br>NF_Load16bitsBg("bmp/bitmap16", 0);<br><br>Loads “bitmap16.img” file on the slot number 0.`,
			},
			{
				name: "NF_Unload16bitsBg",
				description: `void NF_Unload16bitsBg(         u8 slot       // Slot (0 – 15)<br>                      );<br><br>Deletes from RAM the image stored on the selected slot.<br><br>Example:<br><br>NF_Unload16bitsBg(0);<br><br>Deletes from RAM the image stored in slot 0. It’s usefull when you has ben copied the<br>image to the backbuffer or VRAM and no need it longer on RAM.`,
			},
			{
				name: "NF_Copy16bitsBuffer",
				description: `void NF_Copy16bitsBuffer(       u8 screen,           // Screen (0 – 1)<br>                                u8 destination,      // Destination (0 – 1)<br>                                u8 slot              // Slot (0 – 15)<br>                                );<br><br>Copy the image of selected slot to VRAM or BackBuffer of selected screen. As<br>destination, set 0 for VRAM or 1 for BackBuffer.<br><br>Example:<br><br>NF_Copy16bitsBuffer(0, 1, 0);<br><br>Copy the image of slot 0 to the BackBuffer of top screen.`,
			},
			{
				name: "NF_Init8bitsBgBuffers",
				description: `void NF_Init8bitsBgBuffers(void);<br><br>Inits the buffers for 8 bits backgrounds.<br>Use this function 1 time before use any buffer.`,
			},
			{
				name: "NF_Reset8bitsBgBuffers",
				description: `void NF_Reset8bitsBgBuffers(void);<br><br>Resets 8 bits buffer and cleans the RAM contens. Usefull to ensure the data it’s deleted<br>from RAM on stage changes, etc.`,
			},
			{
				name: "NF_Load8bitsBg",
				description: `void NF_Load8bitsBg(   const char* file,       // File<br>                       u8 slot                 // Slot number (0 – 15)<br>                       );<br><br>Loads from FAT or EFS a 8 bits image file in binary format (*.img) with 256x256 pixeles<br>max size (64kb) and his palette (*.pal). You must convert the file using this GRIT<br>command line:<br><br>grit.exe file.ext -gb -gB16 –ftb<br><br>or if you need to share the palette with other background<br><br>grit.exe file.ext -gb -gu8 -gB8 -pu16 -pS -ftb -fh! -Omypal.pal -gTFF00FF<br><br><br>If you want to display 2 backgrouns on same screen, they must share the palette.<br>You can load the amount of files defined on #define NF_SLOTS_BG8B.<br><br>Example:<br><br>NF_Load8bitsBg("bmp/bitmap8", 0);<br><br>Loads “bitmap8.img” and “bitmap8.pal” files on the slot number 0.`,
			},
			{
				name: "NF_Unload8bitsBg",
				description: `void NF_Unload8bitsBg( u8 slot          // Slot (0 – 15)<br>                       );<br><br>Deletes from RAM the image stored on the selected slot.<br><br>Example:<br><br>NF_Unload8bitsBg(0);<br><br>Deletes from RAM the image stored in slot 0. It’s usefull when you has ben copied the<br>image to the backbuffer or VRAM and no need it longer on RAM.`,
			},
			{
				name: "NF_Copy8bitsBuffer",
				description: `void NF_Copy8bitsBuffer(         u8 screen,           // Screen (0 – 1)<br>                                 u8 destination,      // Destination (0 – 2)<br>                                 u8 slot              // Slot (0 – 15)<br>                                 );<br><br>Copy the image of selected slot to VRAM or BackBuffer of selected screen. As<br>destination, set 0 for VRAM layer 2, 1 for VRAM layer 3 or 2 for BackBuffer.<br><br>Example:<br><br>NF_Copy8bitsBuffer(0, 1, 0);<br><br>Copy the image of slot 0 to the layer 3 of top screen.`,
			},
			{
				name: "NF_Init8bitsBackBuffer",
				description: `void NF_Init8bitsBackBuffer( u8 screen         // Screen (0 – 1)<br>                             );<br><br>Inits the 8 bits backbuffer of the selected screen. Use this function one time before<br>use the backbuffer.`,
			},
			{
				name: "NF_Enable8bitsBackBuffer",
				description: `void NF_Enable8bitsBackBuffer(      u8 screen          // Screen (0 – 1)<br>                              );<br><br>Enables backbuffer for the selected screen. If the backbuffer it’s alerady enabled, the<br>contents it’s deleted.`,
			},
			{
				name: "NF_Disble8bitsBackBuffer",
				description: `void NF_Disble8bitsBackBuffer(      u8 screen          // Screen (0 – 1)<br>                              );<br><br>Disables the backbuffer of selected screen, erasing the contents of it and frees the RAM<br>used (64kb);`,
			},
			{
				name: "NF_Flip8bitsBackBuffer",
				description: `void NF_Flip8bitsBackBuffer( u8 screen,                // Screen (0 – 1)<br>                             u8 destination            // Destination layer (0 – 1)<br>                             );<br><br>Sends the contents of Backbuffer to the VRAM of selected screen, showing the image<br>stored on it. You can send it to Layer 2 (0) or Layer 3 (1).`,
			},
			{
				name: "NF_Load16bitsImage",
				description: `void NF_Load16bitsImage(     const char* file,         //   File<br>                             u8 slot,                  //   Slot (0 – 15)<br>                             u16 size_x,               //   Image width (256 max)<br>                             u16 size_y                //   Image height (256 max)<br>                             );<br><br>Loads a 16 bits image (*.img) with max size of 256x256 pixels, into a RAM slot. You<br>must specify also the size if the image. The image will load into 16 bits bg slot.<br>Use NF_Unload16bitsBg(); function to remove it from RAM.<br><br>Example:<br><br>NF_Load16bitsImage(“bmp/character”, 1, 64, 128);<br><br>Loads the “character” file into slot nº 1. The image has a size of 64 x 128 pixels.`,
			},
			{
				name: "NF_Draw16bitsImage",
				description: `void NF_Draw16bitsImage(     u8 screen,       //   Screen (0 – 1)<br>                             u8 slot,         //   Slot (0 – 15)<br>                             s16 x,           //   Position X<br>                             s16 y            //   Position Y<br>                             bool alpha       //   Color 0xFF00FF transparent?<br>                             );<br><br>Draws the image loaded in the selected slot into the backbuffer of selected screen on<br>the specified coordinates. If “alpha” is set to true, all pixels with 0xFF00FF (magenta)<br>color are not draw.<br><br>Example:<br><br>NF_ Draw16bitsImage(1, 1, 100, 50, true);<br><br>Draws the image stored into Slot nº1 in the backbuffer of bottom screen, in the<br>coordinates x:100, y:50.`,
			},
		]
	},
	{
		name: "#include “nf_media.h”",
		description: ``,
		function: [
			{
				name: "NF_LoadBMP",
				description: `void NF_LoadBMP(      const char* file,     // File<br>                      u8 slot               // 16 bits slot to put image<br>                      );<br><br>Loads a 8, 16 o 24 bits BMP image into a 16 bits image slot. To load and show the image,<br>you must init 16 bits mode, the backbuffers and use the NF_Draw16bitsImage(); to send<br>the image from RAM slot to the BackBuffer. All pixels placed out of screen, are just<br>ignored.<br><br>Example:<br><br>NF_LoadBMP(“bmp/lostend”, 0);<br><br>Loads “lostend.bmp” file into 16 bits slot nº 0.`,
			},
		]
	},
	{
		name: "#include “nf_affine.h”",
		description: ``,
		function: [
			{
				name: "NF_InitAffineBgSys",
				description: `void NF_InitAffineBgSys(     u8 screen        // Screen (0 – 1)<br>                             );<br><br>Initializes the "Affine" (rotation and scaling) background system for the selected<br>screen. This mode is exclusive, you can only use affine backgrounds once this mode is<br>initialized and only on layers 2 and 3. Besides these backgrounds can not be more than<br>256 tiles each and must share the palette, with a maximum of 256 colors. The 2D engine<br>must be initialized in mode 2.<br><br>Example:<br><br>NF_InitAffineBgSys(0);<br><br>Initializes Affine mode for the top screen.`,
			},
			{
				name: "NF_LoadAffineBg",
				description: `void NF_LoadAffineBg( const char* file,       //   File<br>                      const char* name,       //   Background name<br>                      u16 width,              //   Width in pixeles<br>                      u16 height              //   Height en pixeles<br>                      );<br><br>Load a "affine" background in RAM from the FAT or NitroFS. It is essential to initialize<br>the tiled backgrounds buffers before load any "affine" background. See the section<br>#include "nf_tiledbg.h" for more information about the NF_InitTiledBgBuffers();<br>function.<br>The "affine" backgrounds has to be 256x256 or 512x512 pixels size and a maximum tileset<br>of 256 tiles. All backgrounds for the same screen must share the palette. Use the<br>Convert_Affine.bat bat in the GRIT folder to convert your backgrounds.<br><br>Example:<br><br>NF_LoadAffineBg(bg/waves512", "waves", 512, 512);<br><br>Load the "waves512" background from bg folder, name it as "waves" and specifies that the<br>background is 512 x 512 pixels.`,
			},
			{
				name: "NF_UnloadAffineBg",
				description: `void NF_UnloadAffineBg(      const char* name          // Background name<br>                             );<br><br>Deletes the specified affine background from RAM. It is a simple call to the<br>NF_UnloadTiledBg(); function.<br><br>Example:<br><br>NF_UnloadAffineBg("waves") deletes the background "waves" from RAM.`,
			},
			{
				name: "NF_CreateAffineBg",
				description: `void NF_CreateAffineBg(      u8 screen,                       //   Screen (0 -1)<br>                             u8 layer,                        //   Layer (2 – 3)<br>                             const char* name,                //   Name<br>                             u8 wrap                          //   Wrap (0 – 1)<br>                             );<br><br>Creates an affine background in the screen and layers specified, using the preloaded<br>graphics in RAM. Specify if you want the background infinite (Wrap 1) or not (Warp 0).<br><br>Example:<br><br>NF_CreateAffineBg (0, 3, "waves", 1);<br><br>Create a background on screen 0, Layer 3, using the background graphics "waves", with<br>the option "wrap arround” enabled.`,
			},
			{
				name: "NF_DeleteAffineBg",
				description: `void NF_DeleteAffineBg(      u8 screen,         // Screen (0 – 1)<br>                             u8 layer           // Layer (2 – 3)<br>                             );<br><br>Deletes from VRAM the background of the screen and layer specified.<br><br>Example:<br><br>NF_DeleteAffineBg(0, 3);<br><br>Delete the background of the top screen in layer 3.`,
			},
			{
				name: "NF_AffineBgTransform",
				description: `void NF_AffineBgTransform(   u8 screen,         //   Screen (0 – 1)<br>                             u8 layer,          //   Layer (2 – 3)<br>                             s32 x_scale,       //   Scale X (0 – 256 - >512)<br>                             s32 y_scale,       //   Scale Y (0 – 256 - >512)<br>                             s32 x_tilt,        //   Tilt X (0 – >512)<br>                             s32 y_tilt         //   Tilt Y (0 – >512)<br>                             );<br><br>Modify the transformation matrix of the specified background with given parameters. You<br>can change the scale on the axes X and Y, as well as the inclination of these axes.<br><br>Example:<br><br>NF_AffineBgTransform(0, 3, 512, 512, 0, 0);<br><br>Zoom the bottom screen background on Layer 3, to the 50% of its size.`,
			},
			{
				name: "NF_AffineBgMove",
				description: `void NF_AffineBgMove( u8 screen,       //   Screen (0 – 1)<br>                      u8 layer,        //   Layer (2 – 3)<br>                      s32 x,           //   Position X<br>                      s32 y,           //   Position Y<br>                      s32 angle        //   Rotacion angle (-2048 / 2048)<br>                      );<br><br>Moves the Affine background to the position specified. You can also specify the rotation<br>of this background (between -2048 to 2048). Affine backgrounds can’t be moved with<br>NF_ScrollBg(); function.<br><br>Example:<br><br>NF_AffineBgMove(0, 3, 128, 96, 256);<br><br>Move the background of the top screen in the layer 3 at coordinates x128, Y96 and rotate<br>45 degrees to the right.`,
			},
			{
				name: "NF_AffineBgCenter",
				description: `void NF_AffineBgCenter(      u8 screen,         //   Screen (0 – 1)<br>                             u8 layer,          //   Layer (2 – 3)<br>                             s32 x,             //   Position X<br>                             s32 y              //   Position Y<br>                             );<br><br>Define the center of rotation of the affine background specified.<br><br>Example:<br><br>NF_AffineBgCenter(0, 3, 128, 128);<br><br>Define the center of rotation of the top screen, layer 3 affine background at<br>coordinates x128, and 128.`,
			},
		]
	},
	{
		name: "#include “nf_3d.h”",
		description: ``,
		function: [
			{
				name: "NF_Set3D",
				description: `void NF_Set3D( u8 screen,    // Screen (0 – 1)<br>               u8 mode       // Mode (0, 2, 5)<br>               );<br><br>Init 3D mode for the selected screen.<br><br> Mode          Configuration<br>------        -------------------------------------<br>0             Tiled Bg’s at 256 colors.<br>2             Affine Bg’s of 8 bits in layers 2 & 3<br>5             Bitmap Bg’s at 8 or 16 bits.<br><br>3D objets are rendered in layer 0. If you set screen 1 for 3D, screen numbers for 2D<br>gets inverted, soo top screen it’s 1 and bottom screen 0.<br>You must use this function before use 3dSprites.<br><br><br>Example:<br><br>NF_Set3D(1, 0);<br><br>Init 3D mode for Tiled Bg’s and Sprites on screen 1 (bottom)`,
			},
			{
				name: "NF_InitOpenGL",
				description: `void NF_InitOpenGL(void);<br><br>Initialitzes and configures OpenGL for 3dSprites functions of the lib.<br>NF_Init3dSpriteSys(); automaticaly calls it. Soo you never use this.`,
			},
		]
	},
	{
		name: "#include “nf_sprite3d.h”",
		description: `These functions are special, since it uses the 3D engine to create sprites with textured<br>polygons. Can only be used on a screen at the same time, we lose the background layer 0,<br>but in return we can create up to 256 sprites of a maximum size of 1024x1024, can use<br>any size in base 2, and use a maximum of 32 palettes simultaneously.<br>For the loading of graphics and palettes, use the same functions as 2D sprites.<br>You can convert indexed images of 256 colors to create textures for the 3dSprites with<br>the following grit command:<br><br>grit.exe imagen.bmp -gb -gu8 -gB8 -pu8 -ftb -fh! -gTFF00FF<br><br>Or use the convert bats of 8bits images<br>`,
		function: [
			{
				name: "NF_Init3dSpriteSys",
				description: `void NF_Init3dSpriteSys();<br><br>Init 3dSprite system.<br>Asign 128kb of VRAM for textures and 16 kb for palettes.<br>Enable extended palettes.<br><br>Example:<br><br>NF_Init3dSpriteSys();<br><br>Init the 3dSprites engine.`,
			},
			{
				name: "NF_Vram3dSpriteGfx",
				description: `void NF_Vram3dSpriteGfx(u16 ram,            // Gfx RAM slot (0 – 255)<br>                      u16 vram,             // Gfx VRAM slot (0 – 255)<br>                      bool keepframes       // Copy only the first frame?<br>                      );<br><br>Copy a Gfx from RAM to VRAM, to can use it later on 3dSprite. You must indicate the<br>origin slot on RAM (0 – 255), the destination slot on VRAM (0 – 255), and if it’s<br>animated one, if you want to copy all frames to VRAM (false) or just the first one<br>(true).<br><br>Example:<br><br>NF_Vram3dSpriteGfx(160, 23, false);<br><br>Copy the Gfx stored on the slot nº160 of RAM to the slot nº23 of VRAM, copying all<br>frames if it’s animated.`,
			},
			{
				name: "NF_Free3dSpriteGfx",
				description: `void NF_Free3dSpriteGfx(u16 id              // VRAM slot (0 – 255)<br>                      );<br><br>Delete from VRAM the Gfx of selected slot.<br>You must don’t delete the Gfx if a sprite it’s using it, may cause sprite appears<br>corrupted of turns invisible.<br><br>Example:<br><br>NF_Free3dSpriteGfx(34);<br><br>Delete from VRAM the gfx on slot nº34.`,
			},
			{
				name: "NF_VramSpriteGfxDefrag",
				description: `void NF_VramSpriteGfxDefrag();<br><br>Defrags the free VRAM used for sprites gfx. This function is automaticaly executed when<br>fragmented free VRAM it’s bigger in 50% of total free VRAM. You don’t need to execute<br>this command manualy never. You can get the state of VRAM reading those variables:<br><br>NF_TEXVRAM.free                <-   Total VRAM free<br>NF_TEXVRAM.fragmented          <-   Fragmented free VRAM<br>NF_TEXVRAM.inarow              <-   Largest free block of VRAM at the end<br>NF_TEXVRAM.lost                <-   unusable free VRAM because fragmentation.`,
			},
			{
				name: "NF_Vram3dSpritePal",
				description: `void NF_Vram3dSpritePal(       u8 id,          // RAM slot of palette (0 – 64)<br>                               u8 slot         // VRAM slot of palette (0 – 31)<br>                               );<br><br>Copy the palette from RAM to the SLOT of extended palettes on VRAM. If slot it’a already<br>in use, the contents it’s overwrited.<br><br>Example:<br><br>NF_VramSpritePal(56, 8);<br><br>Copy the palette from RAM slot nº56 to the extended palettes slot nº8.`,
			},
			{
				name: "NF_Create3dSprite",
				description: `void NF_Create3dSprite(        u8 id,          //   Sprite Id (0 – 255)<br>                               u16 gfx,        //   Gfx slot (0 – 255)<br>                               u8 pal,         //   Palette slot (0 – 31)<br>                               s16 x,          //   X coordinate<br>                               s16 y           //   Y coordinate<br>                               );<br><br>Create a sprite with the Id (0 - 255) given on the screen, using the Gfx and palette of<br>selected slots. You must select also the coordinates where the sprite is created.<br><br>Example:<br><br>NF_Create3dSprite(12, 30, 1, 100, 50);<br><br>Create a sprite on screen , with the id nº12, using the gfx stored on the slot nº30 of<br>VRAM and the palette from slot nº1. The sprite is created on the coordinates x:100, y:50`,
			},
			{
				name: "NF_Delete3dSprite",
				description: `void NF_Delete3dSprite(u8 id);<br><br>Delete from screen the sprite of Id selected. The Gfx and palette used by the sprited<br>will not be deleted from VRAM.<br><br>Example:<br><br>NF_Delete3dSprite(12);<br><br>Delete from screen the sprite with id nº12.`,
			},
			{
				name: "NF_Sort3dSprites",
				description: `void NF_Sort3dSprites(void);<br><br>Sorts the draw order of created 3dSprites by his ID. The lowest ID has priority.<br>void NF_Set3dSpritePriority( u16 id,          // Sprite ID (0 – 255)<br>                             u16 prio         // Priority (0 – 255)<br>                             );<br><br>Changes the draw priority of the 3dSprite with selected ID. The lowest ID number mean<br>the highest priority.`,
			},
			{
				name: "NF_Swap3dSpritePriority",
				description: `void NF_Swap3dSpritePriority( u16 id_a,       // Sprite ID A<br>                              u16 id_b        // Sprite ID B<br>                              );<br><br>Swaps the priority between two 3dSprites.`,
			},
			{
				name: "NF_Move3dSprite",
				description: `void NF_Move3dSprite( u8 id,           // Id. of Sprite (0 – 255)<br>                      s16 x,           // Position X<br>                      s16 y            // Position Y<br>                      );<br><br>Move a 3dSprite to the position specified.<br><br>Example:<br><br>NF_Move3dSprite(35, 100, 50);<br><br>Moves the 3dSprite nº35 to the coordinates x:100, y:50`,
			},
			{
				name: "NF_Show3dSprite",
				description: `void NF_Show3dSprite( u8 id,           // Id. of Sprite (0 – 255)<br>                      bool show        // Visivility<br>                      );<br><br>Show or hides a 3dSprite. If you hide it, 3dSprite just becomes invisible, without<br>delete it.<br><br>Example:<br><br>NF_Show3dSprite(35, false);<br><br>Hides the 3dSprite nº35.<br><br>NF_Show3dSprite(45, true);<br><br>Makes visible the 3dSprite nº45.`,
			},
			{
				name: "NF_Set3dSpriteFrame",
				description: `void NF_Set3dSpriteFrame(       u8 id,        // Id. of Sprite (0 – 255)<br>                                u8 frame      // Frame<br>                                );<br><br>Selects what frame of an animation has to show the 3dSprite.<br><br>Example<br><br>NF_Set3dSpriteFrame(20, 5);<br><br>Sprite nº20 shows the frame nº5.`,
			},
			{
				name: "NF_Draw3dSprites",
				description: `void NF_Draw3dSprites(void);<br><br>Draws on the screen all created 3dSprites.<br>You need to do this one time per frame to display created 3dSprites.<br><br>This is the basic code to show them:<br><br>// Draw all 3D Sprites<br>NF_Draw3dSprites();<br>// Update 3D scenario, if not, nothing on the screen<br>glFlush(0);<br>// Wait for vertical sync<br>swiWaitForVBlank();`,
			},
			{
				name: "NF_Update3dSpritesGfx",
				description: `void NF_Update3dSpritesGfx(void);<br><br>Update if needed the textures for animated 3dSprites.<br>Use this if any of your 3dSprites has the flag KEEPFRAMES == TRUE.<br>Put this function just after swiWaitForVBlank();`,
			},
			{
				name: "NF_Rotate3dSprite",
				description: `void NF_Rotate3dSprite(          u16   id,          //   Sprite ID (0 – 255)<br>                                 s16   x,           //   Rotacion X (-512/0/512)<br>                                 s16   y,           //   Rotacion Y (-512/0/512)<br>                                 s16   z            //   Rotacion Z (-512/0/512)<br>                                 );<br><br>Rotates the 3dSprite over the 3 axis. You can set a rotation between -512 y 512,<br>becoming 0 the central point (no rotation).`,
			},
			{
				name: "NF_Scale3dSprite",
				description: `void NF_Scale3dSprite( u16 id,               // Sprite ID<br>                       u16 x,                // X scale (0/64/512)<br>                       u16 y                 // Y scale (0/64/512)<br>                       );<br><br>Scales 3dSprite over X & Y axis. Scaling range goes from 0 to 512, 64 equals to 100%<br>scale.`,
			},
			{
				name: "NF_Blend3dSprite",
				description: `void NF_Blend3dSprite( u8 sprite,            // Sprite ID (0 – 255)<br>                       u8 poly_id,           // Polygon ID (1 – 62)<br>                       u8 alpha              // Transparency (0 – 31)<br>                       );<br><br>Enable and change the level of alpha of the 3D sprite indicated. For transparency to be<br>effective among Sprites, you must specify a different poly_id for each sprite (between 1<br>and 62). The alpha range is from 0 to 31, 31 means opaque. To remove the transparency,<br>select a value 31 for alpha or set poly_id to 0.`,
			},
			{
				name: "NF_3dSpritesLayer",
				description: `void NF_3dSpritesLayer(          u8 layer           // Layer<br>                                 );<br><br>Select the layer to draw the 3D Sprites. (0 - 3)<br>3dSprites actually always drawn on Layer 0, this function only changes the priority of<br>this layer on the other.`,
			},
			{
				name: "NF_3dSpriteEditPalColor",
				description: `void NF_3dSpriteEditPalColor( u8   pal,          //   Palette (0 – 31)<br>                              u8   number,       //   Color number (0 – 255)<br>                              u8   r,            //   Value for R (0 – 31)<br>                              u8   g,            //   Value for G (0 – 31)<br>                              u8   b             //   Value for B (0 – 31)<br>                              );<br><br>Changes the value of one color on one the sprites palete of screen specified. The change<br>is made over the RAM copy of the palette, soo you dont see any change until you update<br>it on VRAM with NF_3dSpriteUpdatePalette(); function. Use this function to make cool<br>effect on your Sprites.<br><br>Example:<br><br>NF_3dSpriteSetPalColor(3, 1, 31, 0, 0);<br><br>Change the value of color nº1 of the palette nº3 to red.`,
			},
			{
				name: "NF_3dSpriteUpdatePalette",
				description: `void NF_3dSpriteUpdatePalette(          u8 pal            // Palette (0 – 31)<br>                                        );<br><br>Updates on VRAM the sprites palette specified with the RAM copy of it.<br><br>Example:<br><br>NF_3dSpriteUpdatePalette(2);<br><br>Updates the palette nº2.`,
			},
			{
				name: "NF_3dSpriteGetPalColor",
				description: `void NF_3dSpriteGetPalColor( u8 pal,             //   Pal (0 – 31)<br>                             u8 number,          //   Color number   (0 – 255)<br>                             u8* r,              //   R value (0 –   31)<br>                             u8* g,              //   G value (0 –   31)<br>                             u8* b               //   B value (0 –   31)<br>                      );<br><br>Gets the RGB value of one color from sprites palette loaded on RAM from screen<br>specified.<br><br>Example:<br><br>u8 red;<br>u8 green;<br>u8 blue;<br>NF_3dSpriteGetPalColor(3, 200, &red, &green, &blue);<br><br>Gets the RGB value of color number 200 from sprites palette number 3 and store it into<br>“red”, “green” and “blue” variables`,
			},
			{
				name: "NF_3dSpriteSetDeep",
				description: `void NF_3dSpriteSetDeep(       u8 id,            // Sprite ID (0 – 255)<br>                               s16 z             // Deep (-512/0/512)<br>                               );<br><br>Sets the depth in the Z axis for selected 3dSprite, -512 being the closest point, 0 is<br>the default and 512 the furthest point. Change the Sprite’s depth is to prevent the<br>intersection with other sprites when rotation or zoom it’s applied. Change the depth of<br>Sprite also alters the priority it has on screen.`,
			},
		]
	},
	{
		name: "#include “nf_mixedbg.h”",
		description: ``,
		function: [
			{
				name: "NF_InitMixedBgSys",
				description: `void NF_InitMixedBgSys(u8 screen);   // Screen (0 – 1)<br><br>Init mixed background mode (Tiled BG + Bitmap 8 bits)<br>Layer 0 a 2 – Tiled (64kb, 48kb for tiles, 16kb for mapas).<br>Layer 3 - Bitmap 8 bits (64kb).<br>You can use all functions of both background modes.`,
			},
		]
	},
]

const doclist = document.getElementById("docs")
const list = document.getElementById("list")

docs.forEach(doc => {
	const div = document.createElement("div")
	div.className = "item"
	
	const name = document.createElement("a")
	name.className = "name"
	name.innerHTML = doc.name
	div.append(name)

	const description = document.createElement("p")
	description.className = "description"
	description.innerHTML = doc.description
	div.append(description)

	if (doc.function) {
		const function_div = document.createElement("div")
		function_div.className = "function"

		doc.function.forEach(func => {
			const funcdiv = document.createElement("div")
			funcdiv.className = "item2"

			const name = document.createElement("a")
			name.className = "name blue"
			name.innerHTML = func.name
			funcdiv.append(name)

			const pre1 = document.createElement("pre")
			pre1.innerHTML = func.description
			funcdiv.append(pre1)
			
			function_div.append(funcdiv)
		})

		div.append(function_div)
	}

	doclist.append(div)
})

document.querySelector("#docs").childNodes.forEach(data => {
	const div = document.createElement("div")

	const tag = document.createElement("a")
	tag.innerHTML = data.querySelector(".name").innerHTML
	tag.onclick = () => {
		data.scrollIntoView()
	}
	div.append(tag)

	if (data.querySelector(".function")) {
		data.querySelector(".function").childNodes.forEach(res => {
			const func = document.createElement("a")
			func.className = "blue small"
			func.innerHTML = " -- " + res.querySelector(".name").innerHTML
			func.onclick = () => {
				res.scrollIntoView()
			}
			div.append(func)
		})
	}

	list.append(div)
});