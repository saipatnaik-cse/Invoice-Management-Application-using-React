package HRC30360W;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class SearchCustId {
	public static Connection getConnection()
    {
         Connection conn =null;
         String url ="jdbc:mysql://localhost:3306/grey_goose";
         String uname = "root";
         String password ="root";
         
            
            
                try {
                    Class.forName("com.mysql.jdbc.Driver");
                    conn =DriverManager.getConnection(url,uname,password);
                } catch (ClassNotFoundException e) {
                    
                    e.printStackTrace();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
                
                return conn;

        }
	
	public static ArrayList<HRC30360W_POJO> searchwithcustid(int cust_no)
    {
		String SEARCH_WITH_CUSTID = "SELECT * FROM winter_internship where cust_number=" + "?;";
		ArrayList<HRC30360W_POJO> allModels =new ArrayList<HRC30360W_POJO>();
        int sl_no;
        String business_code;
        int cust_number;
        String clear_date;
        int buisness_year;
        String doc_id;
        String posting_date;
        String document_create_date;
        String document_create_date1;
        String due_in_date;
        String invoice_currency;
        String document_type;
        int posting_id;
        String area_business;
        double total_open_amount;
        String baseline_create_date;
        String cust_payment_terms;
        int invoice_id;
        int isOpen;
        String aging_bucket;
        int is_deleted;
        
        try {
         Connection conn = getConnection();
         PreparedStatement pst = conn.prepareStatement(SEARCH_WITH_CUSTID);
         pst.setInt(1,cust_no);
         ResultSet rs = pst.executeQuery();
         System.out.println(pst);

         while(rs.next())
         {
        	 HRC30360W_POJO model = new HRC30360W_POJO();
        	 sl_no= rs.getInt(1);
        	 business_code=rs.getString(2);
        	 cust_number=rs.getInt(3);
        	 clear_date=rs.getString(4);
        	 buisness_year= rs.getInt(5);
        	 doc_id=rs.getString(6);
        	 posting_date=rs.getString(7);
        	 document_create_date=rs.getString(8);
        	 document_create_date1=rs.getString(9);
        	 due_in_date=rs.getString(10);
        	 invoice_currency=rs.getString(11); 
        	 document_type=rs.getString(12); 
        	 posting_id=rs.getInt(13); 
        	 area_business=rs.getString(14); 
        	 total_open_amount=rs.getDouble(15); 
        	 baseline_create_date=rs.getString(16); 
        	 cust_payment_terms=rs.getString(17);
        	 invoice_id=rs.getInt(18);
        	 isOpen=rs.getInt(19);
        	 aging_bucket=rs.getString(20);
        	 is_deleted=rs.getInt(21);
        	 
                
        	 model.setSl_no(sl_no);
        	 model.setBusiness_code(business_code);
        	 model.setCust_number(cust_number);
        	 model.setClear_date(clear_date);
        	 model.setBuisness_year(buisness_year);
        	 model.setDoc_id(doc_id);
        	 model.setPosting_date(posting_date);
        	 model.setDocument_create_date(document_create_date);
        	 model.setDocument_create_date1(document_create_date1);
        	 model.setDue_in_date(due_in_date);
        	 model.setInvoice_currency(invoice_currency);
        	 model.setDocument_type(document_type);
        	 model.setPosting_id(posting_id);
        	 model.setArea_business(area_business);
        	 model.setTotal_open_amount(total_open_amount);
        	 model.setBaseline_create_date(baseline_create_date);
        	 model.setCust_payment_terms(cust_payment_terms);
        	 model.setInvoice_id(invoice_id);
        	 model.setIsOpen(isOpen);
        	 model.setAging_bucket(aging_bucket);
        	 model.setIs_deleted(is_deleted);
                
        	 allModels.add(model);
                
                
         }               
        
        }
        catch (Exception e) {
            e.printStackTrace();
            System.out.println("exception occur");
        }
        
        return allModels;  
    }
}
