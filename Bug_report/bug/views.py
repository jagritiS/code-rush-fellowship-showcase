from django.shortcuts import render
from rest_framework.views import APIView

from Bug_report.bug.serializer import BugReportSerializer


# Create your views here.
class BugReportAPI(APIView):

def get(self, request):
    filters={
        "severity": request.query_params.get["severity"],
        "status": request.query_params.get["status"],
    }

    bugs = BugService.list_bugs(filters)
    serializer = BugReportSerializer(bugs, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)

def post(self, request):
        serializer = BugReportSerializer(data=request.data)
        if serializer.is_valid():
            bug = BugService.create_bug(serializer.validated_data)
            return Response(
                BugReportSerializer(bug).data,
                status=status.HTTP_201_CREATED
            )
        return Response(Serializer.errors, status=status.HTTP_400_BAD_REQUEST)
