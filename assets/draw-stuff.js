// Draw stuff, with P5  // CF p5js.org/reference
// Time-stamp: <2020-02-02 14:46:00 Chuck Siska>
// ------------------------------------------------------------

// =====================================================  draw_grid ====
// Draw a fancy grid with major & minor lines 
// & major row/col numbers.
function draw_grid( rminor, rmajor, rstroke, rfill  ) 
{
    stroke( rstroke );
    fill( rfill );;
    let sz = g_canvas.cell_size;
    let width = g_canvas.wid*sz;
    let height = g_canvas.hgt*sz
    for ( var ix = 0; ix < width; ix += rminor )
    {
        let big_linep = (ix % rmajor == 0);
        let line_wgt = 1;
        if (big_linep) line_wgt = 2;
        strokeWeight( line_wgt );
        line( ix, 0, ix, height );
        strokeWeight( 1 );
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        let big_linep = (iy % rmajor == 0);
        let line_wgt = 1;
        if (big_linep) line_wgt = 2;
        strokeWeight( line_wgt );
        line( 0, iy, width, iy );
        strokeWeight( 1 );
    }

    let str ="0 3) (0 4) (0 5) (0 10) (0 11) (0 12) (0 13) (0 14) (1 1) (1 2) (1 3) (1 5) (1 6) (1 7) (1 8) (1 9) (1 10) (1 14) (1 15) (1 16) (1 17) (1 21) (1 22) (1 23) (1 24) (1 25) (2 1) (2 3) (2 5) (2 7) (2 17) (2 18) (2 19) (2 20) (2 21) (2 23) (2 25) (2 26) (2 27) (3 1) (3 2) (3 3) (3 5) (3 6) (3 7) (3 21) (3 22) (3 23) (3 27) (3 28) (4 2) (4 15) (4 16) (4 17) (4 18) (4 22) (4 28) (5 2) (5 3) (5 4) (5 5) (5 13) (5 14) (5 15) (5 18) (5 19) (5 20) (5 21) (5 22) (5 25) (5 26) (5 27) (5 28) (6 5) (6 6) (6 7) (6 13) (6 15) (6 25) (6 27) (7 7) (7 8) (7 9) (7 13) (7 14) (7 15) (7 25) (7 26) (7 27) (8 9) (8 13) (8 21) (8 22) (8 23) (8 26) (9 1) (9 2) (9 3) (9 9) (9 10) (9 11) (9 13) (9 21) (9 23) (9 24) (9 25) (9 26) (10 1) (10 3) (10 9) (10 11) (10 13) (10 21) (11 1) (11 2) (11 3) (11 9) (11 10) (11 11) (11 12) (11 13) (11 21) (11 22) (12 1) (12 9) (12 11) (12 22) (13 1) (13 5) (13 6) (13 7) (13 8) (13 9) (13 11) (13 13) (13 14) (13 15) (13 21) (13 22) (13 23) (14 1) (14 5) (14 11) (14 12) (14 13) (14 15) (14 16) (14 17) (14 21) (14 23) (14 24) (14 25) (14 26) (14 27) (15 1) (15 5) (15 6) (15 13) (15 14) (15 15) (15 17) (15 19) (15 20) (15 21) (15 22) (15 23) (15 27) (16 1) (16 6) (16 17) (16 19) (16 27) (17 1) (17 5) (17 6) (17 7) (17 13) (17 14) (17 15) (17 17) (17 19) (17 20) (17 21) (17 22) (17 25) (17 26) (17 27) (18 1) (18 2) (18 5) (18 7) (18 13) (18 15) (18 16) (18 17) (18 22) (18 25) (18 27) (19 13) (19 14) (19 15) (19 2) (19 5) (19 6) (19 7) (19 20) (19 21) (19 22) (19 25) (19 26) (19 27) (20 2) (20 7) (20 9) (20 10) (20 11) (20 14) (20 20) (20 26) (21 2) (21 6) (21 7) (21 9) (21 11) (21 12) (21 13) (21 14) (21 20) (21 26) (22 2) (22 3) (22 5) (22 6) (22 9) (22 10) (22 11) (22 17) (22 18) (22 19) (22 20) (22 26) (22 27) (23 3) (23 5) (23 17) (23 27) (24 3) (24 5) (24 17) (24 23) (24 24) (24 25) (24 27) (25 1) (25 2) (25 3) (25 5) (25 13) (25 14) (25 15) (25 16) (25 17) (25 18) (25 19) (25 20) (25 21) (25 22) (25 23) (25 25) (25 26) (25 27) (26 1) (26 3) (26 5) (26 6) (26 7) (26 8) (26 13) (26 17) (26 19) (27 1) (27 2) (27 3) (27 8) (27 11) (27 12) (27 13) (27 17) (27 18) (27 19) (27 20) (27 21) (27 22) (27 23) (27 24) (27 25) (28 1) (28 8) (28 11) (28 25) (29 1) (29 5) (29 6) (29 7) (29 8) (29 11) (29 13) (29 14) (29 15) (29 21) (29 22) (29 23) (29 24) (29 25) (30 1) (30 5) (30 7) (30 11) (30 12) (30 13) (30 15) (30 16) (30 17) (30 18) (30 19) (30 20) (30 21) (30 23) (31 1) (31 2) (31 5) (31 6) (31 7) (31 13) (31 14) (31 15) (31 21) (31 22) (31 23) (31 24) (31 25) (31 26) (31 27) (32 2) (32 5) (32 7) (32 14) (32 27) (33 2) (33 3) (33 4) (33 5) (33 7) (33 14) (33 25) (33 26) (33 27) (34 7) (34 8) (34 9) (34 10) (34 12) (34 13) (34 14) (34 25) (34 27) (35 10) (35 11) (35 12) (35 25) (35 26) (35 27";
    let coordinates = str.split(') (');
    for(var i = 0; i < coordinates.length; i++){
	var point = coordinates[i].split(' ');
	var x = parseInt(point[0]);
	var y = parseInt(point[1]);
    	rect(x*rminor,y*rminor,rminor,rminor);
    }
}
