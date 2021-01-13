from tkinter import Tk, Frame, Canvas, BOTH

import random 

def main():
    width = 800
    height = 600

    # Create the root Tk object.
    root = Tk()
    root.geometry(f"{width}x{height}")

    # Create a Frame object.
    frame = Frame()
    frame.master.title("Scene")
    frame.pack(fill=BOTH, expand=1)

    # Create a canvas object that will draw into the frame.
    canvas = Canvas(frame)
    canvas.pack(fill=BOTH, expand=1)

    # Call the draw_scene function.
    draw_scene(canvas, 0, 0, width-1, height-1)

    root.mainloop()


def draw_scene(canvas, scene_left, scene_top, scene_right, scene_bottom):
    """Draw a scene in the canvas. scene_left, scene_top,
    scene_right, and scene_bottom contain the extent in
    pixels of the region where the scene should be drawn.

    param scene_left - left side of the region; less than scene_right
    param scene_top - top of the region; less than scene_bottom
    param scene_right - right side of the region
    param scene_bottom - bottom of the region

    If needed, the width and height of the
    region can be calculated like this:
    scene_width = scene_right - scene_left + 1
    scene_height = scene_bottom - scene_top + 1
    """
    # Call your functions here, such as draw_sky, draw_ground,
    # draw_snowman, draw_tree, draw_shrub, etc.
    tree_left = scene_left + 500
    tree_top = scene_top + 100
    tree_height = 150
    far_left = scene_left
    far_right = scene_right
    height = scene_bottom - 200 
    blade_left = scene_left + (random.choice(range(1, 400)))
    blade_right = blade_left + 10 
    blade_top = scene_bottom + 200 - (random.choice(range(1, 200)))
    blade_bottom = blade_top + 20
    sky_left = scene_left
    sky_top = scene_top
    sky_right = scene_right  
    sky_bottom = sky_top + 400
    repeat = random.choice(range(10,50))
    cloud_left = scene_left
    cloud_right = scene_right + 100
    cloud_bottom = scene_top + 300
    cloud_top = scene_top 

    draw_pine_tree(canvas, tree_left, tree_top, tree_height)
    draw_ground(canvas, far_left, far_right, height)
    draw_sky(canvas, sky_left, sky_top, sky_bottom, sky_right)
    for _ in range(1000):
        draw_grass_blade(canvas, blade_left, blade_top, blade_right, blade_bottom)
    draw_cloud(canvas, cloud_left, cloud_right, cloud_bottom, cloud_top, repeat)
    

    


# Define more functions here, like draw_sky, draw_ground,
# draw_cloud, draw_tree, draw_kite, draw_snowflake, etc.

def draw_pine_tree(canvas, peak_x, peak_y, height):
    """Draw a single pine tree."""
    trunk_width = height / 10
    trunk_height = height / 8
    trunk_left = peak_x - trunk_width / 2
    trunk_right = peak_x + trunk_width / 2
    trunk_bottom = peak_y + height

    skirt_width = height / 2
    skirt_height = height - trunk_height
    skirt_left = peak_x - skirt_width / 2
    skirt_right = peak_x + skirt_width / 2
    skirt_bottom = peak_y + skirt_height

    canvas.create_rectangle(trunk_left, skirt_bottom,
            trunk_right, trunk_bottom,
            outline="gray20", width=1, fill="tan3")
    canvas.create_polygon(peak_x, peak_y,
            skirt_right, skirt_bottom,
            skirt_left, skirt_bottom,
            outline="gray20", width=1, fill="dark green")

def draw_ground(canvas, far_left, far_right, height):

    height_two = height + 200 

    canvas.create_rectangle(far_left, height,
            far_right, height_two,
            outline="gray20", width=1, fill="tan4")

def draw_grass_blade(canvas, blade_left, blade_top, blade_right, blade_bottom):
    

    canvas.create_rectangle(blade_left, blade_top,
            blade_right, blade_bottom,
            outline="gray20", width=1, fill="forest green")

def draw_sky(canvas, sky_left, sky_top, sky_bottom, sky_right):

    #sky_left = scene_left
    #sky_top = scene_top
    #sky_right = scene_right  
    #sky_bottom = sky_top + 400

    canvas.create_rectangle(sky_left, sky_top,
            sky_right, sky_bottom,
            outline="gray20", width=1, fill="sky blue")

def draw_cloud(canvas, cloud_left, cloud_right, cloud_bottom, cloud_top, repeat):

    circle_x = cloud_left + (random.choice(range(1, 100)))
    circle_y = cloud_top + (random.choice(range(1, 100)))
    bottom_x = circle_x + (random.choice(range(10, 50)))
    bottom_y = circle_y + (random.choice(range(10, 50)))

    for _ in range(100):
        canvas.create_oval(circle_x, circle_y, bottom_x, bottom_y, 
        fill="snow") 

    
# Call the main function so that
# this program will start executing.

main()