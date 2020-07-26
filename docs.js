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
		name: "",
		description: ``,
		function: [
			{
				name: "",
				description: ``,
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