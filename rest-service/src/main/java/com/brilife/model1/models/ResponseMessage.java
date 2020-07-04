package com.brilife.model1.models;

public class ResponseMessage<T> {

    private int code;
    private String message;
    private T data;

    public ResponseMessage(int code, String message, T data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public static <T> ResponseMessage<T> success(T data) {
        return new ResponseMessage(0, null, data);
    }

    public static <T> ResponseMessage<T> successAdd(T data) {
        return new ResponseMessage(0, "Data successfully added", data);
    }

    public static <T> ResponseMessage<T> successEdit(T data) {
        return new ResponseMessage(0, "Data successfully changed", data);
    }

    public static <T> ResponseMessage<T> successDelete(T data) {
        return new ResponseMessage(0, "Data successfully removed", data);
    }

    public static ResponseMessage error(int code, String message) {
        return new ResponseMessage(code, message, null);
    }

    public static <T> ResponseMessage<T> error(int code, String message, T data) {
        return new ResponseMessage(code, message, data);
    }
}
