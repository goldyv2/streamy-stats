import json
import random
from fastapi import FastAPI
from fastapi.responses import StreamingResponse

app = FastAPI()

def dummy_stats_stream():

    while True:
        data = {
            "cpu_usage": random.randint(1, 100), # % percentage
            "stream_bitrate": random.randint(980, 8000), # kbps
        }

        yield json.dumps(data) + "\n"

@app.get("/stats")
async def stats():
    return StreamingResponse(dummy_stats_stream(), status_code = 206)