package Potato;
import java.awt.*;
import javax.swing.*;
import javax.swing.plaf.ColorUIResource;
import javax.swing.plaf.metal.DefaultMetalTheme;
import javax.swing.plaf.metal.MetalLookAndFeel;

import tooldie.model_delete_data;
import tooldie.model_update_order;

import java.awt.event.*;
import java.awt.geom.RoundRectangle2D;
import java.net.URL;
public class Memo extends JPanel{
	 public static Color cl = new Color(255,239,226);
	 public static JFrame frame;
	  public Memo() {
	  }
	  public static void main(String[] args) {
		  frame = new JFrame();
		  frame.setSize(350, 200);
		  frame.setLocation(300,200);
		  
		  JTextArea t = new JTextArea();
		  t.setFont(new Font("ＭＳ Ｐゴシック", Font.BOLD, 25));
		  t.setBackground(cl);
		  ///set padding
		  t.setBorder(BorderFactory.createCompoundBorder(
			        t.getBorder(), 
			        BorderFactory.createEmptyBorder(20, 20, 20, 20)));
		  
		  frame.add(t);
		  
		 
		  /*
		  t.addMouseMotionListener(new MouseMotionAdapter() {
				public void mouseMoved(MouseEvent e) {

					JFrame.setDefaultLookAndFeelDecorated(true);
					SwingUtilities.updateComponentTreeUI(frame);  
					
				}
			});
		  
		  t.addMouseListener(new java.awt.event.MouseAdapter() {				
				public void mouseExited(java.awt.event.MouseEvent e) {
					//frame.setUndecorated(true);
				}
				public void mouseClicked(java.awt.event.MouseEvent e) {
					JFrame.setDefaultLookAndFeelDecorated(false);
					SwingUtilities.updateComponentTreeUI(frame); 
	
				}
			});
		  */
		  		
		  URL url = Memo.class.getResource("/img-pims.png");
		  ImageIcon webIcon = new ImageIcon(url);
		  frame.setIconImage(webIcon.getImage());
		  
		  WindowListener winListener = new WindowAdapter() {
			  public void windowClosing(WindowEvent event) {
				  System.exit(0);
			  }
			  
		  };
		  
		  
		  
		  frame.addWindowListener(winListener);

		  
		  frame.setUndecorated(true);
		  
		  
		  frame.addComponentListener(new ComponentAdapter() {
              @Override
               public void componentResized(ComponentEvent e) {
                  frame.setShape(new RoundRectangle2D.Double(0, 0, frame.getWidth(), frame.getHeight(), 10, 10));
               }
           });
		  
		  frame.getRootPane().setWindowDecorationStyle(JRootPane.FRAME);
		  MetalLookAndFeel.setCurrentTheme(new MyDefaultMetalTheme());
		    try {
		      UIManager.setLookAndFeel(new MetalLookAndFeel());
		    } catch (Exception e) {
		      e.printStackTrace();
		    }

		  SwingUtilities.updateComponentTreeUI(frame);  
		   
		  
		  frame.setTitle("O T A T O　　　　　　　                        　　　");
		  
		  
		  
		  
		  frame.setAlwaysOnTop(true);
		  frame.setVisible(true);  

		  
		  removeMinMaxClose(frame);
		  
		  
	  }	
	  
	  
	  public static void removeMinMaxClose(Component comp)
	  {

	    if(comp instanceof JButton)
	    {
	      //comp.getParent().remove(comp);
	      
	      String accName = ((JButton) comp).getAccessibleContext().getAccessibleName();

	      if(
	    		  accName.equals("Maximize")
	    		  ||accName.equals("Iconify")
	    		 // ||accName.equals("Close")
	    	) 
	    	  comp.getParent().remove(comp);

	      
	    }
	    if (comp instanceof Container)
	    {
	      Component[] comps = ((Container)comp).getComponents();
	      for(int x = 0, y = comps.length; x < y; x++)
	      {
	        removeMinMaxClose(comps[x]);
	      }
	    }


	  }

	  
}



class MyDefaultMetalTheme extends DefaultMetalTheme {
	public static Color cl = new Color(255,255,255);
	public static Color cl2 = new Color(255,239,226);

	public ColorUIResource getWindowTitleInactiveBackground() {
	  return new ColorUIResource(cl);
	}
	public ColorUIResource getWindowTitleBackground() {
	  return new ColorUIResource(cl);
	}
	public ColorUIResource getPrimaryControlHighlight() {
	  return new ColorUIResource(cl);
	}
	/*
	public ColorUIResource getPrimaryControlDarkShadow() {
	  return new ColorUIResource(cl);///border
	}
	*/
	public ColorUIResource getPrimaryControl() {
	  return new ColorUIResource(cl);
	}
	public ColorUIResource getControlHighlight() {
	  return new ColorUIResource(cl);
	}
	/*
	public ColorUIResource getControlDarkShadow() {
	  return new ColorUIResource(cl);///border
	}
	*/
	public ColorUIResource getControl() {
	  return new ColorUIResource(cl);
	}
}
