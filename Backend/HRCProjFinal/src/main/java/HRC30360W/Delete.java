package HRC30360W;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Delete {
	
	public static int deletedata(HRC30360W_POJO model)
	{
		String DELETE_USERS_SQL = "delete from winter_internship where sl_no = ?;";
		int result = 0;

        try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
        
        try (
	        	Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose", "root", "root");

	            PreparedStatement preparedStatement = connection.prepareStatement(DELETE_USERS_SQL)) {
	            preparedStatement.setInt(1, model.getSl_no());
	            System.out.println(preparedStatement);
	            preparedStatement.executeUpdate();
	            connection.close();

//	            result = preparedStatement.executeUpdate();

	        } catch (SQLException e) {
	            // process sql exception
	            e.printStackTrace();
	        }
	        return result;

	}

}
